import { motion } from 'framer-motion';

function Loading() {
    return (
        <div className="flex items-center justify-center h-screen flex-col space-y-4 bg-primary w-full text-white">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: [0, 15, 0], opacity: [1, 0.8, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-16 h-16"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    aria-hidden="true"
                    role="img"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g fill="#ed4c5c">
                        <path d="M59.7 25.5c0 9.8-7.1 9.8-7.1 0c0-5.8 3.5-10.5 3.5-10.5s3.6 4.7 3.6 10.5"></path>
                        <path d="M54.5 43.2c0 7.5-7.1 7.5-7.1 0c0-4.4 3.5-8 3.5-8s3.6 3.6 3.6 8"></path>
                    </g>
                    <path fill="#d0d0d0" d="M21.1 55.5L9.5 43.7l25.9-26.2L47 29.3z"></path>
                    <path fill="#ed4c5c" d="M30.2 43.7l14.2-14.4l-9-9.2l-14.3 14.4z"></path>
                    <path fill="#333" d="M27.6 46.3l2.6-2.6l-9.1-9.2l-2.6 2.6z"></path>
                    <path fill="#bcc0c1" d="M43.8 26l2.6-2.6l-5.2-5.3l-2.6 2.6z"></path>
                    <g fill="#42ade2">
                        <path d="M14.7 62l1.2-1.3L4.3 48.9L3 50.2z"></path>
                        <path d="M12.7 57.4l5.2-5.2l-5.2-5.3l-5.2 5.3z"></path>
                    </g>
                    <path fill="#ffffff" d="M45.1 19.4l-.3-.3z"></path>
                    <path fill="#bcc0c1" d="M43.1 20.1l.4.3l.3.4l.6.6L59.7 6l.7-2l.3-1l.3-1z"></path>
                </svg>
            </motion.div>
            <p className='font-semibold text-lg'>Loading...</p>
        </div>
    );
}

export default Loading