import { MessageCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

export const Group = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white border-gray-700">
        <div className="p-4">
          <h3 className="font-bold text-[#1f2937] mb-4">CÙNG NHÓM DỊCH</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Image
                src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21-ELSYx3yMPcKM.jpg"
                width={30}
                height={30}
                alt="Group Manga"
                className="rounded"
              />
              <div className="flex-1">
                <h4 className="font-medium text-[#1f2937]">1993</h4>
                <p className="text-xs text-gray-400">
                  C. ONESHOT • 16 NGÀY TRƯỚC
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Image
                src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21-ELSYx3yMPcKM.jpg"
                width={30}
                height={30}
                alt="Group Manga"
                className="rounded"
              />
              <div className="flex-1">
                <h4 className="font-medium text-[#1f2937]">
                  The Fable (Hoàn thành)
                </h4>
                <p className="text-xs text-gray-400">C. 240 • 2 NĂM TRƯỚC</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Image
                src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21-ELSYx3yMPcKM.jpg"
                width={30}
                height={30}
                alt="Group Manga"
                className="rounded"
              />
              <div className="flex-1">
                <h4 className="font-medium text-[#1f2937]">Bumpoor</h4>
                <p className="text-xs text-gray-400">C. 19 • 4 THÁNG TRƯỚC</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Image
                src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21-ELSYx3yMPcKM.jpg"
                width={30}
                height={30}
                alt="Group Manga"
                className="rounded"
              />
              <div className="flex-1">
                <h4 className="font-medium text-[#1f2937]">
                  The Fable - The second contact (Hoàn thành)
                </h4>
                <p className="text-xs text-gray-400">C. 86 • 2 NĂM TRƯỚC</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Image
                src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21-ELSYx3yMPcKM.jpg"
                width={30}
                height={30}
                alt="Group Manga"
                className="rounded"
              />
              <div className="flex-1">
                <h4 className="font-medium text-[#1f2937]">
                  Mèo đen Jiumin (Hoàn thành)
                </h4>
                <p className="text-xs text-gray-400">C. 2 • 4 THÁNG TRƯỚC</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-gray-700">
        <div className="p-4">
          <h3 className="font-bold text-[#1f2937] mb-4">ĐỀ XUẤT</h3>
          <div className="text-center text-gray-400">
            <MessageCircle className="w-12 h-12 mx-auto mb-2 opacity-30" />
            <p className="text-sm">Chưa có đề xuất nào</p>
          </div>
        </div>
      </div>
    </div>
  );
};
