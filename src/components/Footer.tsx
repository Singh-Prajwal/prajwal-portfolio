// src/components/Footer.tsx
export default function Footer() {
    const year = new Date().getFullYear();
    return (
      <footer className="text-center py-8 text-gray-500 border-t border-white/5 mt-12">
        <p>© {year} Prajwal Singh. All rights reserved.</p>
      </footer>
    )
  }