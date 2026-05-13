export default function Loading() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-[60vh] text-slate-300-">
      <div className="animate-spin text-8xl">🐶</div>
      <p className="text-lg mb-6">Bitte warten Sie einen Moment.</p>
    </div>
  );
}
