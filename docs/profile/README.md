# 纪念页条目目录

这里每个子目录代表一个人，便于在 GitHub 上单独管理文字、照片和相关资料。

推荐结构：

```text
docs/profile/
├── placeholder-001-lin-xinghe/
│   ├── entry.js
│   ├── photo.jpg        # 可选
│   └── README.md        # 可选，可放更详细资料
└── placeholder-002-chen-an/
    └── entry.js
```

每个 `entry.js` 默认导出一个对象：

```js
export default {
  id: 'unique-id',
  name: '姓名',
  age: 19,
  region: '上海市',
  date: '2021-03-12',
  summary: '简短介绍',
  tags: ['标签一', '标签二'],
  // photo: new URL('./photo.jpg', import.meta.url).href // 可选，有照片时再打开
}
```

注意：

- `id` 需要保持唯一。
- `date` 使用 `YYYY-MM-DD` 格式。
- 照片等文件可以直接放在同一个人的目录里。
- 新增一个人时，只需要复制一个子目录并修改其中的 `entry.js`。