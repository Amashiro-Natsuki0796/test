const entry = {
  "age": 18,
  "biography": "# 大标题\n\n\n\n## 小标题\n\n||需要隐藏的内容||\n\n\n---\n\n\n\n[图片：Screenshot from 2026-07-14 13-11-56.png]\n\n\n\n\n---\n\n\n\n[图片：VR-Chat.png]\n\n\n\n---\n\n\n\n\n[相册：20260526_173530.jpg｜Screenshot from 2026-07-19 14-10-06.png｜Minecraft.png｜f3051120.jpg]",
  "birthDate": "2008-06-10",
  "date": "2026-07-20",
  "deathDate": "2026-07-20",
  "gender": "女性",
  "hideBiographyTitle": true,
  "hobbies": [
    "音乐"
  ],
  "id": "sub_20260722_112559_259b89df",
  "name": "小星",
  "nickname": "小星",
  "occupation": "学生",
  "petalsEnabled": true,
  "quote": "我喜欢你",
  "region": "北京市",
  "socials": [],
  "summary": "# 大标题\n\n\n\n## 小标题\n\n||需要隐藏的内容||\n\n\n---\n\n\n\n[图片：Screenshot from 2026-07-14 13-11-56.png]\n\n\n\n\n---\n\n\n\n[图片：VR-Chat.png]\n\n\n\n---\n\n\n",
  "tags": [
    "音乐"
  ],
  "uploadedAt": "2026-07-22T11:25:59Z",
  "useDefaultBackground": true
}

entry.photo = new URL('./avatar.jpg', import.meta.url).href
entry.contentImages = [
  { name: "Screenshot from 2026-07-14 13-11-56.png", url: new URL("./content-01.png", import.meta.url).href },
  { name: "VR-Chat.png", url: new URL("./content-02.png", import.meta.url).href },
  { name: "20260526_173530.jpg", url: new URL("./content-03.jpg", import.meta.url).href },
  { name: "Screenshot from 2026-07-19 14-10-06.png", url: new URL("./content-04.png", import.meta.url).href },
  { name: "Minecraft.png", url: new URL("./content-05.png", import.meta.url).href },
  { name: "f3051120.jpg", url: new URL("./content-06.jpg", import.meta.url).href },
]

export default entry
