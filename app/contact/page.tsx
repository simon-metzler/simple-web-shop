export default function Page() {
  return (
    <div className="flex flex-col items-end p-12 gap-2">
      <textarea className="textarea w-full" placeholder="Contact us"></textarea>
      <button className="btn btn-primary w-min">Send</button>
    </div>
  );
}
