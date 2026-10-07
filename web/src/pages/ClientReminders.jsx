import { useState, useMemo } from "react";
import { getClients, addClient, deleteClient, getUpcomingEvents, validateClient } from "../utils/clientStore";
import FAQ from "../components/FAQ";
import PrintButton from "../components/PrintButton";
import HowItWorks from "../components/HowItWorks";


const HOW_IT_WORKS = [
  { title: "Add clients", desc: "Enter name, birthday, anniversary, and phone" },
  { title: "View upcoming", desc: "See events in the next 7, 14, or 30 days" },
  { title: "Send wishes", desc: "One-tap WhatsApp greeting for each event" },
];

const FAQ_ITEMS = [
  { q: "Why should I track client birthdays and anniversaries?", a: "Sending timely wishes builds personal rapport with clients. It keeps you top-of-mind and leads to referrals and repeat business. Successful LIC agents consistently maintain personal touch with clients." },
  { q: "Where is my client data stored?", a: "All client data is stored locally in your browser (localStorage). No data is sent to any server, ensuring complete privacy of your client information." },
  { q: "How do I enter dates?", a: "Enter birthday and anniversary as month-day format (MM-DD). For example, 03-15 for March 15th. The system automatically calculates the next occurrence." },
  { q: "Can I send WhatsApp greetings directly?", a: "Yes! Click the WhatsApp icon next to any upcoming event to open a pre-filled WhatsApp message for that client." },
  { q: "What happens if I clear my browser data?", a: "All client data will be lost. Use the Print/PDF button regularly to keep a backup of your client list." },
];

export default function ClientReminders() {
  const [clients, setClients] = useState(() => getClients());
  const [showForm, setShowForm] = useState(false);
  const [errors, setErrors] = useState([]);
  const [daysRange, setDaysRange] = useState(30);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    birthday: "",
    anniversary: "",
    notes: "",
  });

  const upcoming = useMemo(() => getUpcomingEvents(daysRange), [clients, daysRange]);

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validateClient(form);
    if (errs.length > 0) {
      setErrors(errs);
      return;
    }
    const newClient = addClient(form);
    setClients((prev) => [...prev, newClient]);
    setShowForm(false);
    setErrors([]);
    setForm({ name: "", phone: "", email: "", birthday: "", anniversary: "", notes: "" });
  }

  function handleDelete(id) {
    const updated = deleteClient(id);
    setClients(updated);
  }

  function getWhatsAppLink(event) {
    const greeting = event.type === "birthday"
      ? `Happy Birthday ${event.clientName} ji! 🎂🎉\n\nWishing you a wonderful year ahead filled with health, happiness, and prosperity!\n\nWarm regards,\nYour LIC Advisor`
      : `Happy Anniversary ${event.clientName} ji! 💐🎊\n\nWishing you and your family many more years of love and togetherness!\n\nWarm regards,\nYour LIC Advisor`;
    return `https://wa.me/${event.phone?.replace(/\D/g, "")}?text=${encodeURIComponent(greeting)}`;
  }

  return (
    <div className="animate-fade-up">
      <h1 className="text-2xl font-bold text-white mb-1">Client Reminders</h1>
      <p className="text-white/40 text-sm mb-6">
        Track client birthdays and anniversaries — never miss a greeting
      </p>

      <HowItWorks steps={HOW_IT_WORKS} />

      {upcoming.length > 0 && (
        <div className="panel p-4 mb-6 border-l-4 border-l-signal">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium text-white">Upcoming Events</div>
            <select
              className="text-xs bg-white/5 border border-white/10 rounded px-2 py-1 text-white/50"
              value={daysRange}
              onChange={(e) => setDaysRange(Number(e.target.value))}
            >
              <option value={7}>Next 7 days</option>
              <option value={14}>Next 14 days</option>
              <option value={30}>Next 30 days</option>
              <option value={60}>Next 60 days</option>
              <option value={90}>Next 90 days</option>
            </select>
          </div>
          <div className="space-y-2">
            {upcoming.map((event, i) => (
              <div key={i} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-base">{event.type === "birthday" ? "\u{1F382}" : "\u{1F490}"}</span>
                  <div>
                    <span className="text-white/70">{event.clientName}</span>
                    <span className="text-white/30 text-xs ml-2">{event.type}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-white/40">{event.date}</span>
                  <span className={`text-xs px-2 py-0.5 rounded ${event.daysUntil === 0 ? "bg-signal/15 text-signal font-medium" : event.daysUntil <= 3 ? "bg-warn/15 text-warn" : "bg-white/5 text-white/40"}`}>
                    {event.daysUntil === 0 ? "Today!" : `${event.daysUntil}d`}
                  </span>
                  {event.phone && (
                    <a
                      href={getWhatsAppLink(event)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] hover:text-[#25D366]/80 transition-colors"
                      title="Send greeting via WhatsApp"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-white/40">{clients.length} {clients.length === 1 ? "client" : "clients"}</div>
        <div className="flex gap-2">
          <PrintButton />
          <button onClick={() => setShowForm(!showForm)} className="btn-primary text-sm py-2 px-4">
            {showForm ? "Cancel" : "+ Add Client"}
          </button>
        </div>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="panel p-5 mb-6 animate-fade-up">
          {errors.length > 0 && (
            <div className="mb-4 p-3 rounded-lg bg-bad/10 border border-bad/20 text-bad text-sm">
              {errors.map((e, i) => <div key={i}>{e}</div>)}
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wide">Client Name</label>
              <input className="input-field" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g. Rajesh Kumar" />
            </div>
            <div>
              <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wide">Phone Number</label>
              <input className="input-field" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="e.g. 9876543210" />
            </div>
            <div>
              <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wide">Email (optional)</label>
              <input className="input-field" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="e.g. rajesh@email.com" />
            </div>
            <div>
              <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wide">Birthday (MM-DD)</label>
              <input className="input-field" value={form.birthday} onChange={(e) => setForm({ ...form, birthday: e.target.value })} placeholder="e.g. 03-15 for March 15" />
            </div>
            <div>
              <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wide">Anniversary (MM-DD)</label>
              <input className="input-field" value={form.anniversary} onChange={(e) => setForm({ ...form, anniversary: e.target.value })} placeholder="e.g. 11-20 for Nov 20" />
            </div>
            <div>
              <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wide">Notes (optional)</label>
              <input className="input-field" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Any notes..." />
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button type="submit" className="btn-primary text-sm py-2 px-6">Save Client</button>
          </div>
        </form>
      )}

      {clients.length > 0 ? (
        <div className="space-y-2">
          {clients.map((c) => (
            <div key={c.id} className="panel-inner p-3 flex items-center justify-between">
              <div>
                <div className="text-sm text-white/70">{c.name}</div>
                <div className="text-xs text-white/30 mt-0.5">
                  {c.phone}
                  {c.birthday && <span className="ml-3">{"\u{1F382}"} {c.birthday}</span>}
                  {c.anniversary && <span className="ml-3">{"\u{1F490}"} {c.anniversary}</span>}
                </div>
              </div>
              <button onClick={() => handleDelete(c.id)} className="text-xs text-bad/60 hover:text-bad transition-colors print:hidden">Delete</button>
            </div>
          ))}
        </div>
      ) : (
        !showForm && (
          <div className="panel-inner p-8 text-center text-white/30 text-sm">
            No clients added yet. Click &quot;+ Add Client&quot; to start tracking birthdays and anniversaries.
          </div>
        )
      )}

      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}
