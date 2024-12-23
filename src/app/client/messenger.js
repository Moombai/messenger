import { query } from './db.js';

export const getMessages = async () => {
  const { rows } = await query('SELECT * FROM messages');

  return rows.map(row => row.message);
}

export const saveMessage = async (message) => {
  const text = 'INSERT INTO messages(message) VALUES($1) RETURNING *'
  const values = [message];

  const response = await query(text, values);

  return response.rows[0];
}

export const validateMessage = async (message) => {
  if (typeof message !== "string") {
    throw new Error("Invalid message");
  }
}
