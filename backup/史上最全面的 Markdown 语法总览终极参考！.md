 GitHub Flavored Markdown (GFM) 语法总览。
虽然 Markdown 的核心语法元素是有限的，但通过组合、嵌套和特定于 GitHub 的扩展功能，可以实现非常丰富的效果。

---

### **一、 基本文本格式 (1-15)**

1.  **标题 H1 (Setext-style):** `This is an H1` + `=======`
    > This is an H1
    > =======

2.  **标题 H2 (Setext-style):** `This is an H2` + `-------`
    > This is an H2
    > -------

3.  **标题 H1 (ATX-style):** `# H1`
    > # H1

4.  **标题 H2 (ATX-style):** `## H2`
    > ## H2

5.  **标题 H3 (ATX-style):** `### H3`
    > ### H3

6.  **标题 H4 (ATX-style):** `#### H4`
    > #### H4

7.  **标题 H5 (ATX-style):** `##### H5`
    > ##### H5

8.  **标题 H6 (ATX-style):** `###### H6`
    > ###### H6

9.  **粗体 (Asterisks):** `**bold text**`
    > **bold text**

10. **粗体 (Underscores):** `__bold text__`
    > __bold text__

11. **斜体 (Asterisk):** `*italicized text*`
    > *italicized text*

12. **斜体 (Underscore):** `_italicized text_`
    > _italicized text_

13. **粗斜体 (Asterisks):** `***bold and italic***`
    > ***bold and italic***

14. **粗斜体 (Underscores):** `___bold and italic___`
    > ___bold and italic___

15. **删除线 (GFM):** `~~The world is flat.~~`
    > ~~The world is flat.~~

### **二、 列表 (16-30)**

16. **无序列表 - 星号:** `* Item`
    > * Item 1
    > * Item 2

17. **无序列表 - 加号:** `+ Item`
    > + Item 1
    > + Item 2

18. **无序列表 - 连字符:** `- Item`
    > - Item 1
    > - Item 2

19. **有序列表:** `1. First item`
    > 1. First item
    > 2. Second item

20. **嵌套列表 (无序内有序):** `* Item` + `  1. Nested ordered`
    > * Item
    >   1. Nested ordered
    >   2. Another nested

21. **嵌套列表 (有序内无序):** `1. First` + `   * Nested unordered`
    > 1. First
    >    * Nested unordered
    >    * Another nested

22. **任务列表 (GFM):** `- [x] Completed task`
    > - [x] Completed task
    > - [ ] Incomplete task

23. **列表项内的段落:** `* First line` + `  ` + `  Paragraph break`
    > * This is the first line.
    >
    >   And this is a paragraph within the list item.

24. **列表项内的代码块:** `* Code:` + `  ` + `  ```code````
    > * Here is some code:
    >
    >       function hello() { console.log("hi"); }

25. **列表项内的引用:** `* Quote:` + `  ` + `  > quote`
    > * A quote here:
    >
    >   > This is a quote inside a list.

26. **不同层级缩进的列表 (Level 2):** `* Level 1` + `  + Level 2`
    > * Level 1
    >   + Level 2
    >     - Level 3

27. **不同标记混用的列表 (Level 2):** `1. Ordered` + `   * Unordered nested`
    > 1. Ordered
    >    * Unordered nested
    > 2. Next ordered

28. **紧凑列表 (无空行):** `* Item 1` + `* Item 2`
    > * Item 1
    > * Item 2

29. **列表项内多个段落 (再次强调):** `* Para 1` + `  ` + `  Para 2`
    > * This is the first paragraph in the list item.
    >
    >   This is the second paragraph in the same list item.

30. **列表中的复杂结构 (综合):** 在列表项中混合使用代码、引用等。
    > * Complex Item:
    >   1. Step one.
    >      ```js
    >      console.log('code');
    >      ```
    >   2. Step two.
    >      > A nested quote.

### **三、 链接与图片 (31-45)**

31. **内联链接:** `[title](https://example.com)`
    > [My Website](https://example.com)

32. **带标题的内联链接:** `[title](https://example.com "Optional title")`
    > [My Website](https://example.com "Go to my site")

33. **自动链接 (URL):** `<https://www.example.com>`
    > <https://www.example.com>

34. **参考式链接 (定义):** `[Reference link][id]` + `[id]: https://example.com`
    > [Reference link][my-link]
    >
    > [my-link]: https://example.com

35. **图片 (内联):** `![alt text](/path/to/img.jpg)`
    > ![An image](https://placehold.co/150)

36. **带链接的图片:** `[![alt text](/path/to/img.jpg)](https://example.com)`
    > [![An image](https://placehold.co/150)](https://example.com)

37. **图片 (参考式):** `![alt text][img-id]` + `[img-id]: /path/to/img.jpg`
    > ![An image][my-image]
    >
    > [my-image]: https://placehold.co/150

38. **为图片添加链接 (方法二):** 使用HTML `<a>` 标签。
    > `<a href="https://example.com"><img src="https://placehold.co/150" alt="An image" /></a>`

39. **调整图片大小 (HTML):** `<img src="..." width="200" height="100">`
    > `<img src="https://placehold.co/150" width="100" />`

40. **居中图片 (HTML/CSS):** `<p align="center">...<img>...</p>`
    > `<p align="center"><img src="https://placehold.co/150" /></p>`

41. **链接到锚点:** `[Go to Section](#section-title)`
    > (需要页面内有对应的 `## Section Title` )

42. **链接到仓库文件:** `[Link to file](./path/to/file.md)`
    > [Link to README](./README.md)

43. **链接到 Issues/Pull Requests:** `#123`
    > See issue #123 for more details.

44. **链接到特定用户:** `@username`
    > Thanks for your contribution, @octocat!

45. **链接到特定提交 (Commit):** `00213a8bd...`
    > The fix was introduced in 00213a8bd...

### **四、 引用与水平线 (46-55)**

46. **基本引用:** `> blockquote`
    > > This is a blockquote.

47. **嵌套引用:** `> Outer` + `>> Inner`
    > > This is the outer quote.
    > >> This is the inner quote.

48. **引用内含列表:** `> * List in quote`
    > > * A list item in a blockquote
    > > * Another item

49. **引用内含代码:** `> `code``
    > > Inline `code` inside a blockquote.

50. **引用内含标题:** `> # Title in quote`
    > > # A heading in a blockquote

51. **引用后紧跟段落:** 正确的格式需要用两个空格换行或空行分隔。
    > > This is a quote.
    >
    > This is a new paragraph.

52. **多段落引用 (Paragraph breaks):** `> Para 1` + `> ` + `> Para 2`
    > > This is the first paragraph of the blockquote.
    > >
    > > This is the second paragraph.

53. **水平线 (连字符):** `---`
    > ---

54. **水平线 (星号):** `***`
    > ***

55. **水平线 (下划线):** `___`
    > ___

### **五、 代码 (56-70)**

56. **行内代码:** `` `code` ``
    > Here is some `inline code`.

57. **代码块 (围栏式, 无语言):**
    ````markdown
    ...
    code here
    ...
    ````
    > ```
    > Sample text here...
    > ```

58. **代码块 (围栏式, 指定语言):**
    ````markdown
    ...python
    def hello():
        print("Hello")
    ...
    ````
    > ```python
    > def hello():
    >     print("Hello")
    > ```

59. **代码块 (缩进式):** Indent every line with 4 spaces.
    >     function hello() {
    >         console.log("Hello");
    >     }

60. **包含反引号的行内代码:** ```` `` `code` `` ``
    > This is `` `backticks` `` inside inline code.

61. **代码块中的缩进:** 保持代码原有的缩进。
    > ```json
    > {
    >   "key": "value"
    > }
    > ```

62. **代码块中的特殊字符:** 代码块会原样显示，无需转义。
    > ```html
    > <div class="test"> &lt; &gt; </div>
    > ```

63. **行内高亮 (非标准):** GitHub 不直接支持，但可用HTML `<mark>`。
    > Use `<mark>highlighted</mark>` text.

64. **长代码块 (滚动):** 长代码会自动出现横向滚动条。
    > ```text
    > This is a very long line of text that will demonstrate the horizontal scrolling behavior of a code block in GitHub Flavored Markdown. It should allow users to scroll horizontally to see all the content without breaking the layout.
    > ```

65. **代码块内换行:** 在代码语言标识符后加 `{1,2}` 可指定高亮行（此为YAML Front Matter风格，非GFM标准，但某些渲染器支持）。
    > (此功能非GFM标准，不保证通用性)

66. **注释 (HTML):** `<!-- This is a comment -->`
    > <!-- This comment won't appear in the rendered output -->

67. **转义字符 (Backslash):** `\*literal asterisks\*`
    > \*literal asterisks\*

68. **转义反引号:** `\``literal backtick\``
    > ``\``literal backtick\``` (显示为 `` ` ``)

69. **转义井号:** `\# Not a header`
    > \# Not a header

70. **转义感叹号:** `\! Not an image`
    > \! Not an image

### **六、 表格 (GFM 扩展, 71-80)**

71. **基本表格:**
    ```markdown
    | Syntax      | Description |
    | ----------- | ----------- |
    | Header      | Title       |
    | Paragraph   | Text        |
    ```
    > | Syntax      | Description |
    > | ----------- | ----------- |
    > | Header      | Title       |
    > | Paragraph   | Text        |

72. **左对齐 (默认):** `| :--- |`
    > | Left-aligned |
    > | :----------- |
    > | Content      |

73. **右对齐:** `| ---: |`
    > | Right-aligned |
    > | ------------: |
    > | Content       |

74. **居中对齐:** `| :---: |`
    > | Center-aligned |
    > | :------------: |
    > | Content        |

75. **混合对齐:**
    > | Left | Center | Right |
    > | :--- | :----: | ----: |
    > | A    | B      | C     |

76. **表格内使用行内格式:** `| *Italic* | **Bold** |`
    > | *Italic* | **Bold** | `Code` |
    > | :------- | :------: | -----: |
    > | Cell 1   | Cell 2   | Cell 3 |

77. **空单元格表格:**
    > | Col 1 | Col 2 |
    > |-------|-------|
    > | Data  |       |
    > |       | Data  |

78. **长文本换行:**
    > | Short | Long Text Column |
    > |-------|------------------|
    > | A     | This is a very long piece of text that will wrap within the table cell to demonstrate how content flows. |

79. **表格内代码:**
    > | Command | Description |
    > |---------|-------------|
    > | `git status` | List all new or modified files |

80. **表格作为布局工具 (不推荐):** 不应滥用表格做文档布局。

### **七、 其他 GFM 特有功能 (81-100)**

81. **提及用户 (@):** `@github`
    > Please review this PR, @reviewer.

82. **引用 Issue 或 Pull Request (#):** `#1`
    > Fixes #1

83. **引用特定提交 (SHA):** `6a5b3f1`
    > The bug was fixed in 6a5b3f1.

84. **表情符号 (Emoji) (使用别名):** `:smile:`
    > This is great! :smile:

85. **表情符号 (使用 Unicode):** `😀`
    > Look, a smiley face! 😀

86. **Strikethrough in Tables:**
    > | Feature     | Status          |
    > |-------------|-----------------|
    > | Old feature | ~~Deprecated~~  |

87. **Task Lists in Comments:**
    > - [x] Understand task lists
    > - [ ] Close the issue

88. **Shorthand for Web URLs:** 自动识别 `https://example.com`
    > Visit https://example.com for more info.

89. **Highlighting (Fenced Code Blocks):** 见第58条，语法高亮是其重要功能。

90. **Diff Formatting in Code Blocks:**
    ```diff
    + Added line
    - Removed line
    ```
    > ```diff
    > + Added line
    > - Removed line
    > ```

91. **折叠细节 (HTML Details/Summary):**
    > 

92. **Mermaid 图表 (在支持的环境中):**
    > ```mermaid
    > graph TD;
    >     A-->B;
    >     A-->C;
    > ```

93. **警告提示框 (HTML Block):**
    > 

94. **行内 HTML:** `<strong>HTML bold</strong>`
    > Use  if needed.

95. **HTML 换行:** `<br>`
    > First LineSecond Line

96. **HTML 分区:** `<div>...</div>`
    > `<div align="right">Right-aligned content.</div>`

97. **脚注 (非标准GFM, 部分平台支持):** `[^1]`
    > This is a sentence with a footnote.[^1]
    >
    > [^1]: This is the footnote definition.

98. **定义列表 (非标准GFM):** 通常需用HTML `<dl>`, `<dt>`, `<dd>`。

99. **数学公式 (LaTeX, 非标准GFM):** `$\sqrt{3}$`，GitHub本身不直接渲染，但可在支持的编辑器或CI/CD流程中处理。

100. **YAML Front Matter:** (用于 Jekyll 等静态博客)
     ```yaml
     ---
     title: My Page
     ---
     ```
     (放置在Markdown文件最顶部)

---
