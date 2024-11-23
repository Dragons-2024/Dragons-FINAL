import { ActivityType } from '../core/interface/Activities';
import { Dialog } from '@headlessui/react';
import { useForm } from 'react-hook-form';

interface UpdateActivityFormProps {
    setClose: () => void;
    initialData: ActivityType;
}

export function UpdateActivityForm({ setClose, initialData }: UpdateActivityFormProps) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ActivityType>({
        defaultValues: initialData,
    });

    const onSubmit = (data: ActivityType) => {
        console.log(data);
        setClose();
        reset();
    };

    return (
        <Dialog open={true} onClose={setClose} className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="fixed inset-0 bg-black opacity-50" aria-hidden="true"></div>
            <div className="bg-white rounded-lg shadow-lg w-full max-w-xl md:max-w-3xl mx-auto p-6 z-50 overflow-auto max-h-screen">
                <Dialog.Title className="text-lg font-bold text-gray-700">Actualizar Seguimiento</Dialog.Title>

            </div>
        </Dialog>
    );
}