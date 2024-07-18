import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/Card";

export default function TestCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Time to get started.</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        cumque eos laboriosam nulla quam aspernatur, magnam neque soluta
        quisquam inventore enim cupiditate deserunt corrupti! Officiis at est
        quidem! Unde, harum.
      </CardContent>
      <CardFooter className="flex justify-between">awesome.</CardFooter>
    </Card>
  );
}
