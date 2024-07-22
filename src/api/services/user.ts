import { api, tokenUtils } from "../config";
import { User, UserPatch } from "../type";

export const getAllUsers = async (): Promise<User[]> => {
  try {
    const response = await api.get("users");
    return response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const getUser = async (id: number): Promise<User> => {
  try {
    const response = await api.get(`users/${id}`);
    return response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const getMe = async (): Promise<User> => {
  try {
    const tokens = tokenUtils.getTokens;
    const response = await api.get(`users/me`, {
      headers: { authorization: `Bearer ${tokens()?.accessToken}` },
    });
    return response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const deleteUser = async (userId: number): Promise<void> => {
  try {
    await api.delete(`users/${userId}`);
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};

export const createUser = async (
  userData: Omit<User, "id" | "updatedAt">
): Promise<User> => {
  try {
    console.log(userData);
    const response = await api.post("users", { json: userData });
    return response.json();
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export const updateUser = async (
  userId: number,
  userData: Partial<UserPatch>
): Promise<User> => {
  try {
    const response = await api.patch(`users/${userId}`, { json: userData });
    return response.json();
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

export const resetPassword = async (userId: number): Promise<void> => {
  try {
    await api.post(`users/${userId}/reset-password`);
  } catch (error) {
    console.error("Error resetting password:", error);
    throw error;
  }
};
