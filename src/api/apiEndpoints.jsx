export const API = {
  RESERVATION: {
      CREATE: "/reservations/",
      LIST: "/reservations/",
      DETAIL: (reservationId) => `/reservation/${reservationId}/`,
      UPDATE: (reservationId) => `/reservation/${reservationId}/`,
      DELETE: (reservationId) => `/reservation/${reservationId}/`,
    },
  FINANTIAL_CONSULTANCY: {
    CREATE: "/finantial-consultancy/",
    LIST: "/finantial-consultancy/",
    DETAIL: (consultancyId) => `/finantial-consultancy/${consultancyId}/`,
    UPDATE: (consultancyId) => `/finantial-consultancy/${consultancyId}/`,
    DELETE: (consultancyId) => `/finantial-consultancy/${consultancyId}/`,
  },

  EMPLOYER_JOBS: {
    CREATE: "/employer-jobs/",
    LIST: "/employer-jobs/",
    DETAIL: (jobId) => `/employer-jobs/${jobId}/`,
    UPDATE: (jobId) => `/employer-jobs/${jobId}/`,
    DELETE: (jobId) => `/employer-jobs/${jobId}/`,
  },

  USER_MANAGEMENT: {
    

    USERS: {
      CREATE: "/users/",
      LIST: "/users/",
      DETAIL: "/users/me/",
    },
    AUTH: {
      LOGIN: "/login/",
      REFRESH: "/refresh/",
    },
    
  },

  ACCOUNT_MANAGEMENT: {
    DETAIL: "/account/",
  },

  TRANSACTIONS: {
    LIST: "/transactions/",
    DEBIT: {
      CREATE: "/transactions/debit/",
      DETAIL: (transactionId) => `/transactions/debit/${transactionId}/`,
    },
    CREDIT: {
      CREATE: "/transactions/credit/",
      DETAIL: (transactionId) => `/transactions/credit/${transactionId}/`,
    },
  },

  CARDS: {
    CREATE: "/card/",
    GET_USER_CARD: "/card/",
    FUND: "/card/fund/",
  },

  QR_CODE: {
    GET: "/qr-code/",
    SCAN: "/scan-qr/",
    SEND_MONEY: "/send-money-via-qr/",
  },

  ANALYTICS: {
    INCOME_EXPENDITURE_ANALYSIS: "/transactions/monthly-comparison/"
  }
  
};
