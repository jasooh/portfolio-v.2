"use client";

// Section containing contact content. Users will be able to send emails to me through this section.

// Form validation & hooks
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Components
import { Button } from "@/components/ui/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { TextArea } from "../../ui/TextArea";
import RichText from "@/components/text/RichText";

const ContactSection: React.FC = () => {
  // Form requirements
  const formSchema = z.object({
    email: z.string().email({
      message: "Please enter a valid email.",
    }),
    message: z
      .string()
      .min(50, { message: "Please enter at least 50 characters." })
      .max(1000, { message: "Please enter less than 1000 characters." }),
  });

  // Defining form and default values
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  // Submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <section id="3" className="contact section-container col-container gap-3">
      {/* Form header */}
      <header className="row-container gap-2">
        <span className="text-secondary">{"//"}</span>
        <h4 className="opacity-50">
          Like what you see? Let&apos;s have a chat.
        </h4>
      </header>

      {/* Form section */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@domain.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <RichText
                    text={field.value}
                    onChange={field.onChange}
                    placeholder={field.name}
                    className="min-h-[5rem] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>

      {/* Credits */}
      <section className="mt-10 opacity-50">
        <p className="text-sm">
          Built with ❤ using <strong>Next.js</strong> and{" "}
          <strong>TypeScript</strong>, and deployed using{" "}
          <strong>Vercel</strong>.<br />© 2024 Justin Abuyuan. All rights
          reserved.
        </p>
      </section>
    </section>
  );
};
ContactSection.displayName = "ContactSection";

export default ContactSection;
