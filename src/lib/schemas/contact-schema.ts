import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().min(2, "Họ tên phải có ít nhất 2 ký tự"),
  email: z.string().email("Email không hợp lệ"),
  phone: z.string().min(10, "Số điện thoại phải có ít nhất 10 số"),
  message: z.string().min(5, "Nội dung phải có ít nhất 5 ký tự"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
