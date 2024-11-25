import { Dialog } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { useUpdateActivity } from "../hooks/useUpdateActivity";
import { ActivityType } from "../core/interface/Activities";

interface UpdateActivityFormProps {
    setClose: () => void;
    initialData: ActivityType;
}

export function UpdateActivityForm({ setClose, initialData }: UpdateActivityFormProps) {
    const { mutate: updateActivity, isError } = useUpdateActivity();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ActivityType>({
        defaultValues: initialData,
    });

    const onSubmit = (data: ActivityType) => {
        const updatedActivity = { ...data, id: initialData.id };
        updateActivity({
            id: initialData.id ?? 0,
            activity: updatedActivity,
        });
        setClose();
    };

    return (
        <Dialog open={true} onClose={setClose} className="relative z-50">
            <div className="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"></div>
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <Dialog.Panel className="w-full max-w-2xl rounded bg-white p-6 shadow">
                    <Dialog.Title className="text-lg font-semibold text-gray-700">
                        Actualizar Actividad
                    </Dialog.Title>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
                        {isError && (
                            <p className="text-red-500 text-center">
                                Ocurrió un error al actualizar la actividad.
                            </p>
                        )}

                        {/* Tipo de contacto */}
                        <div>
                            <label
                                htmlFor="ContactType"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Tipo de contacto
                            </label>
                            <input
                                id="ContactType"
                                {...register("ContactType", { required: "Este campo es obligatorio" })}
                                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                            {errors.ContactType && (
                                <span className="text-red-500 text-sm">{errors.ContactType.message}</span>
                            )}
                        </div>

                        {/* Fecha de contacto */}
                        <div>
                            <label
                                htmlFor="ContactDate"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Fecha de contacto
                            </label>
                            <input
                                type="date"
                                id="ContactDate"
                                {...register("ContactDate", { required: "Este campo es obligatorio" })}
                                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                            {errors.ContactDate && (
                                <span className="text-red-500 text-sm">{errors.ContactDate.message}</span>
                            )}
                        </div>

                        {/* Usuarios del cliente */}
                        

                        {/* Usuario que realizó el contacto */}
                        <div>
                            <label
                                htmlFor="ContactUser"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Ejecutivo Comercial
                            </label>
                            <input
                                id="ContactUser"
                                {...register("ContactUser", { required: "Este campo es obligatorio" })}
                                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                            {errors.ContactUser && (
                                <span className="text-red-500 text-sm">{errors.ContactUser.message}</span>
                            )}
                        </div>

                        {/* Descripción */}
                        <div>
                            <label
                                htmlFor="Description"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Descripción
                            </label>
                            <textarea
                                id="Description"
                                {...register("Description", { required: "Este campo es obligatorio" })}
                                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                            {errors.Description && (
                                <span className="text-red-500 text-sm">{errors.Description.message}</span>
                            )}
                        </div>

                        

                        <div className="flex justify-end gap-4">
                            <button
                                type="button"
                                onClick={setClose}
                                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                            >
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                            >
                                Actualizar
                            </button>
                        </div>
                    </form>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
}
