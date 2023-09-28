'use client';

import { useRouter, redirect } from "next/navigation";
import { startTransition } from "react";

type FormProps  = {
    redirectToPage: () => void;
}

export default function Form(props: FormProps) {

    return <button onClick={() => startTransition(() => props.redirectToPage())}>Redirect</button>
}