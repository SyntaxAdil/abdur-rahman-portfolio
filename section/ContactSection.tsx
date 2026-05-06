"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";

import {
  MotionDiv,
  MotionH2,
  MotionP,
  fadeUp,
  staggerContainer,
} from "@/components/motion/MotionDiv";

import {
  User,
  Mail,
  MessageSquare,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import toast from "react-hot-toast";


const formSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);

    const toastId = toast.loading("Sending message...");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      toast.success("Message sent successfully ", {
        id: toastId,
      });

      reset();
    } catch (error) {
      toast.error("Failed to send message. Try again!", {
        id: toastId,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="bg-[#0d0d0d] py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* HEADER (same as yours) */}
        <MotionDiv
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <MotionP
            variants={fadeUp}
            className="text-xs font-semibold tracking-[2px] uppercase text-emerald-400 mb-3"
          >
            Contact
          </MotionP>

          <MotionH2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-bold text-white tracking-tight"
          >
            Get In <span className="text-emerald-400">Touch</span>
          </MotionH2>

          <MotionDiv
            variants={fadeUp}
            className="mt-4 w-12 h-0.5 bg-emerald-400/40 rounded-full"
          />
        </MotionDiv>

        {/* FORM CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 space-y-6"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* NAME */}
            <div>
              <label className="text-sm text-gray-300 flex items-center gap-2 mb-1">
                <User size={14} /> Name
              </label>
              <input
                {...register("name")}
                className="w-full bg-black/30 border border-white/10 rounded-md px-4 py-2 text-white focus:border-emerald-400 outline-none"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm text-gray-300 flex items-center gap-2 mb-1">
                <Mail size={14} /> Email
              </label>
              <input
                {...register("email")}
                className="w-full bg-black/30 border border-white/10 rounded-md px-4 py-2 text-white focus:border-emerald-400 outline-none"
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-sm text-gray-300 flex items-center gap-2 mb-1">
                <MessageSquare size={14} /> Message
              </label>
              <textarea
                {...register("message")}
                className="w-full bg-black/30 border border-white/10 rounded-md px-4 py-2 text-white focus:border-emerald-400 outline-none min-h-[120px]"
                placeholder="Write your message..."
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* STATUS MESSAGE */}
            <AnimatePresence>
              {status.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`flex items-center gap-2 text-sm px-4 py-3 rounded-md ${
                    status.type === "success"
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-400/30"
                      : "bg-red-500/20 text-red-300 border border-red-400/30"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle size={16} />
                  ) : (
                    <AlertCircle size={16} />
                  )}
                  {status.message}
                </motion.div>
              )}
            </AnimatePresence>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-black py-3 rounded-md font-medium transition"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
