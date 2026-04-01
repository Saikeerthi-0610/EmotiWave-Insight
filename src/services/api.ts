import axios from "axios";

    export const uploadEEG = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await axios.post(
        "http://localhost:5000/api/upload",
        formData
    );

    return res.data;
};