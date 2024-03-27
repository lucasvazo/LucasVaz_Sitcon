import { toast, ToastOptions } from 'react-toastify';
import Logo from "../assets/sitcon.png";
import 'react-toastify/dist/ReactToastify.css';

const useCustomToast = () => {

    const showWarningToast = (message: string, options?: ToastOptions) => {
        toast.warning(message, options);
    };

    const showSuccessToast = (message: string ) => {
        toast.success(message, {
            icon: () => <img className='h-[25px] w-[25px]' src={Logo} />,
            style: { 
                whiteSpace: "nowrap", 
                width: 'fit-content', 
                paddingBlock: "15px", 
                paddingInline: "25px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "1rem",
                fontWeight: 700,
                color: "#00629B",
                gap: "30px",
            },
            progressStyle: {
                background: "#00629B",
                backgroundBlendMode: "color-burn",
                height: "4px",
                borderRadius: "0",
            },
            autoClose: 2500,
            pauseOnFocusLoss: false,
            toastId: 1,
            pauseOnHover: false,
            closeButton: false
        });
    };

    return { showWarningToast, showSuccessToast };
};

export default useCustomToast;