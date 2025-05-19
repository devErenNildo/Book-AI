"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  Timestamp,
  doc,
  getDoc,
} from "firebase/firestore";
import { db, auth } from "@/app/config/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useAuth } from "@/app/context/AuthContext";
import PdfChatLayout from "@/app/components/organisms/chat/PdfChatLayout";
import { InterfaceMessage, LoggedUser } from "@/app/types/interface/interfaces";

export default function PdfChatPage() {
  const { id } = useParams(); // pdfId
  const [messages, setMessages] = useState<InterfaceMessage[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [userLogged, setUserLogged] = useState<LoggedUser | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const router = useRouter();
  const { user } = useAuth();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (!user) {
      router.push("/");
    } else {
      setChecking(false);
    }
  }, [user, router]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUserLogged(u));
    return () => unsub();
  }, []);

  useEffect(() => {
    const loadPdf = async () => {
      const docSnap = await getDoc(doc(db, "pdfs", id as string));
      if (docSnap.exists()) {
        setPdfUrl(docSnap.data().pdfURL);
      }
    };
    loadPdf();
  }, [id]);

  useEffect(() => {
    const q = query(collection(db, `pdfs/${id}/chats`), orderBy("createdAt", "asc"));
    const unsub = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<InterfaceMessage, "id">),
      }));
      setMessages(msgs);
    });

    return () => unsub();
  }, [id]);

  const sendMessage = async () => {
    if (!newMessage.trim() || !userLogged) return;

    await addDoc(collection(db, `pdfs/${id}/chats`), {
      message: newMessage,
      senderId: userLogged.uid,
      senderName: userLogged.displayName || "Anônimo",
      senderPhoto: userLogged.photoURL,
      createdAt: Timestamp.now(),
    });

    setNewMessage("");
  };

  if (checking) return null;

  return (
    <PdfChatLayout
      pdfUrl={pdfUrl}
      messages={messages}
      newMessage={newMessage}
      setNewMessage={setNewMessage}
      sendMessage={sendMessage}
    />
  );
}
