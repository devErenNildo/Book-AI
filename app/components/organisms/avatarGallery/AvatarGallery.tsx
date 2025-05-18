'use client';

import AvatarCard from '../../molecules/avatarCard/AvatarCard';
import useAxiosApi from '@/app/hooks/useAxiosApi';
import { AvatarApiResponse } from '@/app/types/interface/interfaces';

export default function AvatarGallery() {
    const url = "https://randomuser.me/api/?results=8&inc=name,picture";
    const { data, loading, error } = useAxiosApi<AvatarApiResponse>(url);

    if (loading) return <p className="text-center text-white">Carregando...</p>;
    if (error) return <p className="text-center text-red-500">Erro: {error}</p>;
    if (!data || !data.results) return null;

    return (
        <section className="py-16 text-center bg-[#0e0e0e] text-white">
            <AvatarCard images={data.results} />
        </section>
    );
}
