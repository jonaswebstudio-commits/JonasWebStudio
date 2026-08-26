import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { format } from "date-fns";
import { CalendarDays, Clock, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/work/iron-comb/book")({
  head: () => ({
    meta: [
      { title: "Book a Chair — Iron & Comb, Vilnius" },
      {
        name: "description",
        content:
          "Reserve a time at Iron & Comb: pick a date and slot, or call +370 600 11111. Gedimino pr. 22, Vilnius. Mon–Sat 10:00–20:00.",
      },
      { property: "og:title", content: "Book a Chair — Iron & Comb, Vilnius" },
      {
        property: "og:description",
        content: "Pick a date and time, or call +370 600 11111. Walk-ins welcome when space allows.",
      },
    ],
  }),
  component: Book,
});

const SERVICES = [
  "Classic haircut — €18",
  "Skin fade — €22",
  "Kids cut (under 12) — €14",
  "Buzz cut — €12",
  "Beard trim & shape — €10",
  "Hot towel straight razor shave — €20",
  "Beard + hot towel combo — €15",
  "Haircut + beard trim — €25",
  "The Full Service — €35",
  "Hair wash & style — €8",
];

const SLOTS = [
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
];

function Book() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [date, setDate] = useState<Date | undefined>(undefined);
  const [slot, setSlot] = useState<string | null>(null);
  const [service, setService] = useState<string>("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const closed = date ? date.getDay() === 0 : false;

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!date || !slot || !service || !name || !phone) {
      toast.error("Fill in service, date, time, name and phone.");
      return;
    }
    if (closed) {
      toast.error("We're closed on Sundays — pick another day.");
      return;
    }
    toast.success(`Chair reserved — ${format(date, "EEEE d MMMM")} at ${slot}`, {
      description: `${service} for ${name}. We'll confirm by phone.`,
    });
    setSlot(null);
    setNotes("");
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-20">
      <p className="eyebrow">Reservations</p>
      <h1 className="mt-4 text-5xl font-bold sm:text-7xl">Book a chair</h1>
      <div className="rule-brass mt-8 h-px w-32" />
      <p className="mt-6 max-w-lg text-muted-foreground">
        Book online or by phone — walk-ins welcome when space allows.
      </p>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_320px]">
        <form onSubmit={submit} className="border border-border bg-card/40 p-6 sm:p-10">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="flex items-center gap-2 text-base">
                <CalendarDays className="size-4 text-primary" /> Pick a date
              </h2>
              <Calendar
                mode="single"
                selected={date}
                onSelect={(d) => {
                  setDate(d);
                  setSlot(null);
                }}
                disabled={{ before: today }}
                className="mt-4 border border-border bg-background"
              />
              {closed && (
                <p className="mt-3 text-sm text-destructive">Sundays we're closed.</p>
              )}
            </div>

            <div>
              <h2 className="flex items-center gap-2 text-base">
                <Clock className="size-4 text-primary" /> Pick a time
              </h2>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {SLOTS.map((s) => {
                  const active = slot === s;
                  return (
                    <button
                      key={s}
                      type="button"
                      disabled={!date || closed}
                      onClick={() => setSlot(s)}
                      className={`border px-2 py-2.5 font-display text-sm tracking-widest transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
                        active
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:border-primary hover:text-primary"
                      }`}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 space-y-4">
                <div>
                  <Label htmlFor="service">Service</Label>
                  <Select value={service} onValueChange={setService}>
                    <SelectTrigger id="service" className="mt-2">
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {SERVICES.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    className="mt-2"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    className="mt-2"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+370 ..."
                  />
                </div>
                <div>
                  <Label htmlFor="notes">Notes (optional)</Label>
                  <Textarea
                    id="notes"
                    className="mt-2"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Barber preference, length, anything else"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-border pt-6">
            <button
              type="submit"
              className="bg-primary px-8 py-4 font-display text-sm tracking-[0.24em] text-primary-foreground uppercase transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Confirm reservation
            </button>
            <p className="font-display text-xs tracking-[0.2em] text-muted-foreground uppercase">
              {date && slot && !closed
                ? `${format(date, "EEE d MMM")} · ${slot}`
                : "Select a date and time"}
            </p>
          </div>
        </form>

        <aside className="space-y-8 border border-border bg-card/40 p-8">
          <div>
            <h2 className="text-base">Visit us</h2>
            <p className="mt-3 flex items-start gap-3 text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" /> Gedimino pr. 22, Vilnius
            </p>
          </div>
          <div>
            <h2 className="text-base">Hours</h2>
            <p className="mt-3 flex items-start gap-3 text-muted-foreground">
              <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>
                Mon–Sat 10:00–20:00
                <br />
                Sun closed
              </span>
            </p>
          </div>
          <div>
            <h2 className="text-base">Phone</h2>
            <a
              href="tel:+37060011111"
              className="mt-3 flex items-center gap-3 text-primary hover:underline"
            >
              <Phone className="size-4" /> +370 600 11111
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
