"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

// Components
import Image from "next/image";
import { ChevronDown } from "lucide-react";

// Class name merger
import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={className} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between px-2 py-4 font-medium rounded-t-lg transition-all hover:bg-primary-foreground duration-300 [&[data-state=open]>svg]:rotate-180 data-[state=closed]:rounded-b-lg",
        className
      )}
      {...props}
    >
      {/* Experience info */}
      <section className="row-container gap-5">
        <Image
          className="w-[7rem] object-cover rounded-md xl:block hidden"
          alt="placeholder"
          width="500"
          height="500"
          src={"/placeholder.jpg"}
        ></Image>
        <div className="col-container items-start">
          <h2 className="text-secondary">{props.title}</h2>
          <h3>{props.role}</h3>
          <p className="text-sm">{props.date}</p>
        </div>
      </section>
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm text-black transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down bg-secondary p-5 rounded-b-lg"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
