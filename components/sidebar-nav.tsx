import Link from "next/link";
import { BarChart2, Award, Briefcase, Menu } from 'lucide-react';
import { useState } from "react";

export default function SidebarNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Toggle */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          className="p-2 text-gray-600 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white border-r p-6 transition-transform transform md:translate-x-0 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:block`}
      >
        <div className="flex items-center gap-2 mb-12">
          <div className="font-bold text-xl flex items-center gap-1">
            <span className="text-2xl">|||</span> WhatBytes
          </div>
        </div>
        <nav className="space-y-2">
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md"
          >
            <BarChart2 className="h-5 w-5" />
            Dashboard
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-[#1E3A8A] bg-blue-50 rounded-md"
          >
            <Award className="h-5 w-5" />
            Skill Test
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md"
          >
            <Briefcase className="h-5 w-5" />
            Internship
          </Link>
        </nav>
      </div>

      {/* Overlay for Mobile Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}