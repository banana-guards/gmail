import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useMailStore = create(
  persist(
    (set, get) => ({
      mails: [],
      importantMails: [],
      deletedEmails: [],
      featuredEmails: [],
      sendMails: [],
      selectMails: [],
      selectedMail: null,

      setSelectedMail: (mail) => set({ selectedMail: mail }),

      fetchMails: async () => {
        const currentMails = get().mails;
        if (currentMails.length > 0) return;

        try {
          const res = await fetch("/data/MockedMails.json");
          const { data } = await res.json();

          set({ mails: data });
        } catch (error) {
          console.error(error);
        }
      },

      setSelectMails: (id) => {
        set((state) => {
          const isAlreadySelected = state.selectMails.includes(id);
          return {
            selectMails: isAlreadySelected
              ? state.selectMails.filter((mailId) => mailId !== id)
              : [...state.selectMails, id],
          };
        });
      },

      deleteSelectedMails: () => {
        set((state) => {
          const selectedIds = state.selectMails;
          const mailsToDelete = state.mails.filter((mail) =>
            selectedIds.includes(mail.id)
          );

          return {
            mails: state.mails.filter((mail) => !selectedIds.includes(mail.id)),
            deletedEmails: [...state.deletedEmails, ...mailsToDelete],
            featuredEmails: state.featuredEmails.filter(
              (mail) => !selectedIds.includes(mail.id)
            ),
            importantMails: state.importantMails.filter(
              (mail) => !selectedIds.includes(mail.id)
            ),
            selectMails: [],
          };
        });
      },

      markAsImportant: (mail) => {
        set((state) => {
          const alreadyExists = state.importantMails.find(
            (m) => m.id === mail.id
          );

          return {
            importantMails: alreadyExists
              ? state.importantMails.filter((m) => m.id !== mail.id)
              : [...state.importantMails, mail],
          };
        });
      },

      markAsFeatured: (mail) => {
        set((state) => {
          const alreadyExists = state.featuredEmails.find(
            (m) => m.id === mail.id
          );

          return {
            featuredEmails: alreadyExists
              ? state.featuredEmails.filter((m) => m.id !== mail.id)
              : [...state.featuredEmails, mail],
          };
        });
      },
      addSentMail: (newMail) => {
        set((state) => ({
          sendMails: [...state.sendMails, newMail],
        }));
      },
    }),
    {
      name: "mail-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
