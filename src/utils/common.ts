import { toast } from "react-toastify";

export const handleApiError = (error: any) => {
    const errorMessage = error?.data?.message || "An unexpected error occurred. Please try again.";
    
    if (error?.status === 401) {
        toast.error(errorMessage);
    } else {
        toast.error(errorMessage);
    }
};