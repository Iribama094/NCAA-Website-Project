"use client";

import { Upload, X } from "lucide-react";

export default function UploadModal({ onClose, onImageUpload }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-xl max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-[var(--secondary-black)]">
            Upload Event Photo
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--primary-red)] focus:ring-offset-2"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 mb-4">Choose a photo to upload</p>
          <input
            type="file"
            accept="image/*"
            onChange={onImageUpload}
            className="hidden"
            id="photo-upload"
          />
          <label
            htmlFor="photo-upload"
            className="bg-[var(--primary-red)] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[var(--primary-hover)] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--primary-red)] focus:ring-offset-2"
          >
            Select Photo
          </label>
        </div>
      </div>
    </div>
  );
}
