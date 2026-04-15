import api from "../../auth/services/auth.api";

export const getChatUsers = async () => {
  const res = await api.get("/users/chat-users");
  return res.data;
};

export const getMessages = async (userId) => {
  const res = await api.get(`/messages/${userId}`);
  return res.data;
};

export const sendMessage = async (receiverId, text) => {
  const res = await api.post("/messages", { receiverId, text });
  return res.data;
};