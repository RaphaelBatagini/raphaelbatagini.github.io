export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 py-4 text-center">
      <div className="text-sm text-gray-600">
        All rights reserved - {currentYear}
      </div>
    </footer>
  );
}
