const errorsAndMessages = {
  ERROR: {
    PROTOCOL_CONNECTION_LOST: 'PROTOCOL_CONNECTION_LOST',
    ER_CON_COUNT_ERROR: 'ER_CON_COUNT_ERROR',
    ECONNREFUSED: 'ECONNREFUSED',
    ER_BAD_DB_ERROR: 'ER_BAD_DB_ERROR'
  },
  MESSAGE: {
    PROTOCOL_CONNECTION_LOST: 'Database connection was closed.',
    ER_CON_COUNT_ERROR: 'Database has too many connections.',
    ECONNREFUSED: 'Database connection was refused.',
    ER_BAD_DB_ERROR: 'Database does not exist.',
    SUCCESS: 'Connection established successfully.'
  }
}

export default errorsAndMessages
