import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig } from "axios";

interface AxiosRquest<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

export default function useAxiosApi<T = unknown>(url: string, config?: AxiosRequestConfig) {
    const [state, setState] = useState<AxiosRquest<T>>({
        data: null,
        loading: true,
        error: null,
    });

    useEffect(() => {

        if (!url) return;

        setState({ data: null, loading: true, error: null });


        axios
            .get<T>(url, config)
            .then((response) => {
                setState({ data: response.data, loading: false, error: null });
            }).catch((error) => {
                setState({
                    data: null,
                    loading: false,
                    error: error.message || "Erro ao buscar dados",
                });
            });

    }, [url]);

    return state;
}