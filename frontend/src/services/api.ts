import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export const uploadEEG = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await axios.post(
        `${API_URL}/api/upload`,
        formData
    );

    return res.data;
};