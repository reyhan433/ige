"use client"

import React from "react"
import { FaHome, FaSearch, FaCompass, FaVideo, FaPaperPlane, FaHeart, FaPlusSquare, FaUser } from "react-icons/fa"

type SidebarItemProps = {
  icon: React.ReactNode
  label: string
  notification?: number
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, notification }) => (
  <div className="flex items-center gap-4 cursor-pointer hover:bg-neutral-800 rounded-md p-2">
    <div className="text-white text-xl relative">
      {icon}
      {notification && (
        <span className="absolute -top-1 -right-1 bg-red-600 text-xs rounded-full w-5 h-5 flex items-center justify-center text-white font-bold">
          {notification}
        </span>
      )}
    </div>
    <span className="text-white font-semibold">{label}</span>
  </div>
)

type StoryCircleProps = {
  imageSrc: string
  label: string
  isActive: boolean
}

const StoryCircle: React.FC<StoryCircleProps> = ({ imageSrc, label, isActive }) => (
  <div className="flex flex-col items-center cursor-pointer">
    <div className={`w-16 h-16 rounded-full p-1 border-4 ${isActive ? "border-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600" : "border-neutral-700"}`}>
      <img src={imageSrc} alt={label} className="rounded-full w-full h-full object-cover" />
    </div>
    <span className="text-xs text-white mt-1 truncate w-16 text-center">{label}</span>
  </div>
)

type PostProps = {
  imageSrc: string
  caption: string
  user: {
    name: string
    avatar: string
  }
}

const Post: React.FC<PostProps> = ({ imageSrc, caption, user }) => (
  <div className="bg-neutral-900 rounded-md mb-6 p-4">
    <div className="flex items-center gap-4 mb-4">
      <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
      <span className="text-white font-semibold">{user.name}</span>
    </div>
    <img src={imageSrc} alt={caption} className="rounded-md mb-4 max-h-[400px] w-full object-cover" />
    <div className="flex items-center gap-2 mb-2">
      <FaHeart className="text-red-500 cursor-pointer" />
    </div>
    <p className="text-white">{caption}</p>
  </div>
)

export default function DashboardPage() {
  const stories = [
    { imageSrc: "/java.jpg", label: "44dn.jpx", isActive: true },
    { imageSrc: "/cub.jpg", label: "b00ngcubung", isActive: true },
    { imageSrc: "/abe.jpg", label: "abjddtimoo", isActive: true },
    { imageSrc: "/rif.jpg", label: "aftansabill", isActive: true },
    { imageSrc: "/kil.png", label: "kkiellrh", isActive: true },
    { imageSrc: "/tar.jpg", label: "sndyrifaie", isActive: true },
    { imageSrc: "/AJAM.jpg", label: "DODOT", isActive: true },
    { imageSrc: "/BAYU.jpg", label: "langit.pradana", isActive: true },
    { imageSrc: "/mapeng.jpg", label: "apng.__", isActive: true },
  ]

  const posts = [
    {
      imageSrc: "/jun.jpg",
      caption: "MBG NYA MANA WOK",
      user: { name: "Alul penghambat rezeki", avatar: "/RAFI.jpg" },
    },
    {
      imageSrc: "/ps.jpg",
      caption: "MPRUY",
      user: { name: "NAFAS KOPLING", avatar: "/NANDO.jpg" },
    },
    {
      imageSrc: "/ROV.png",
      caption: "TOLONG DIARTIKAN",
      user: { name: "ASBES BOCORS", avatar: "/PP.jpg" },
    },
    // Add more posts as needed
  ]

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="w-60 p-6 border-r border-neutral-800 flex flex-col gap-6 sticky top-0 h-screen overflow-y-auto">
        <div className="text-3xl font-bold mb-6">Instagram</div>
        <SidebarItem icon={<FaHome />} label="Home" />
        <SidebarItem icon={<FaSearch />} label="Search" />
        <SidebarItem icon={<FaCompass />} label="Explore" />
        <SidebarItem icon={<FaVideo />} label="Reels" />
        <SidebarItem icon={<FaPaperPlane />} label="Pesan" notification={2} />
        <SidebarItem icon={<FaHeart />} label="Nontifications" />
        <SidebarItem icon={<FaPlusSquare />} label="Create" />
        <SidebarItem icon={<FaUser />} label="Profile" />
        <div className="mt-auto text-sm text-neutral-500">Lainnya</div>
        <div className="text-sm text-neutral-500">Juga dari Meta</div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 max-w-3xl overflow-y-auto">
        {/* Stories */}
        <div className="flex gap-4 mb-6 overflow-x-auto">
          {stories.map((story, idx) => (
            <StoryCircle key={idx} {...story} />
          ))}
        </div>

        {/* Posts */}
        <div>
          {posts.map((post, idx) => (
            <Post key={idx} {...post} />
          ))}
        </div>
      </main>

      {/* Right sidebar placeholder */}
      <aside className="w-80 p-6 border-l border-neutral-800 hidden lg:flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <img src="/AKU.jpg" alt="reyhnmhrdk_" className="w-12 h-12 rounded-full object-cover" />
          <div>
            <div className="font-semibold">reyhnmhrdk_</div>
            <div className="text-sm text-neutral-500">rey</div>
          </div>
          <button className="ml-auto text-blue-500 text-sm">Switch</button>
        </div>

        <div className="text-sm font-semibold mb-2">Suggested for you</div>
        <ul className="flex flex-col gap-3 text-sm">
          <li>
            <div className="flex items-center justify-between">
              <div>qveeshhaa</div>
              <button className="text-blue-500">Follow</button>
            </div>
            <div className="text-neutral-500">Followed by ntanrmhkila + 11 more</div>
          </li>
          <li>
            <div className="flex items-center justify-between">
              <div>fridoavann</div>
              <button className="text-blue-500">Follow</button>
            </div>
            <div className="text-neutral-500">Followed by ntanrmhkila + 24 more</div>
          </li>
          <li>
            <div className="flex items-center justify-between">
              <div>dinata.frht</div>
              <button className="text-blue-500">Follow</button>
            </div>
            <div className="text-neutral-500">Followed by putraaulia___</div>
          </li>
          <li>
            <div className="flex items-center justify-between">
              <div>chokyas_</div>
              <button className="text-blue-500">Follow</button>
            </div>
            <div className="text-neutral-500">Followed by brgfano + 16 more</div>
          </li>
          <li>
            <div className="flex items-center justify-between">
              <div>arneloenthusiast.1984</div>
              <button className="text-blue-500">Follow</button>
            </div>
            <div className="text-neutral-500">Followed by wildanajaaaaaaa + 6 more</div>
          </li>
        </ul>

        <div className="text-xs text-neutral-600 mt-auto">
          About · Help · Press · API · Jobs · Privacy · Terms · Location · Language · Meta Verified
          <br />
          © 2025 INSTAGRAM FROM META
        </div>
      </aside>
    </div>
  )
}
