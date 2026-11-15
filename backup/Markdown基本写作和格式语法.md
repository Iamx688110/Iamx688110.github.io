# 基本写作和格式语法
如果你不会，那你就需要好好阅读哦，其实一点都不难~
> 使用简单语法在GitHub上为散文和代码创建复杂的格式。

## 标题

若要创建标题，请在标题文本之前添加一到六 <kbd>#</kbd> 个符号。 使用的编号 <kbd>#</kbd> 将确定标题的层次结构级别和字样大小。

```markdown
# A first-level heading
## A second-level heading
### A third-level heading
```

![呈现GitHub Markdown 的屏幕截图，其中显示了示例 h1、h2 和 h3 标头，这些标头按类型大小和视觉权重降序以显示层次结构级别。](/assets/images/help/writing/headings-rendered.png)

使用两个或多个标题时，GitHub会自动生成一个目录，您可以通过单击文件标头中的“大纲”菜单图标<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-list-unordered" aria-label="Table of Contents" role="img"><path d="M5.75 2.5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5Zm0 5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5Zm0 5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5ZM2 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM2 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>来访问该目录。 每个标题标题都列在目录中，你可以单击标题以导航到所选部分。

![README 文件屏幕截图，其中展示了目录的下拉菜单。 目录图标以深橙色边框显示。](/assets/images/help/repository/headings-toc.png)

## 设置文本样式

可以在注释字段和 `.md` 文件中用粗体、斜体、删除线、下标或上标文本来指示强调。

| Style                                                                                | Syntax                                            | 键盘快捷键                                    | Example                                 | 输出                     |
| ------------------------------------------------------------------------------------ | ------------------------------------------------- | ---------------------------------------- | --------------------------------------- | ---------------------- |
| Bold                                                                                 |                                                   |                                          |                                         |                        |
| `** **` 或 `__ __`                                                                    | CommandB <>c3>CtrlB （Windows/Linux）               | `**This is bold text**`                  |                                         |                        |
| **这是粗体文本**                                                                           |                                                   |                                          |                                         |                        |
| 斜体                                                                                   |                                                   |                                          |                                         |                        |
| `* *` 或 `_ _`                                                                        |                                                   |                                          |                                         |                        |
| <kbd>Command</kbd>+<kbd>I</kbd> （Mac） 或 <kbd>Ctrl</kbd>+<kbd>I</kbd> （Windows/Linux） | `_This text is italicized_`                       |                                          |                                         |                        |
| *此文本被斜体化*                                                                            |                                                   |                                          |                                         |                        |
| 删除线                                                                                  |                                                   |                                          |                                         |                        |
| `~~ ~~` 或 `~ ~`                                                                      | None                                              | `~~This was mistaken text~~`             |                                         |                        |
| ~~这是错误的文本~~                                                                          |                                                   |                                          |                                         |                        |
| 粗体和层叠斜体                                                                              |                                                   |                                          |                                         |                        |
| `** **` 和 `_ _`                                                                      | None                                              | `**This text is _extremely_ important**` |                                         |                        |
| **此文本\_非常重要\_**                                                                      |                                                   |                                          |                                         |                        |
| 所有粗体和斜体                                                                              | `*** ***`                                         | None                                     | `***All this text is important***`      |                        |
| ***所有这些文本都很重要***                                                                     | <!-- markdownlint-disable-line emphasis-style --> |                                          |                                         |                        |
| 下标                                                                                   | `<sub> </sub>`                                    | None                                     | `This is a <sub>subscript</sub> text`   | 这是 <sub>下标</sub> 文本    |
| 上标                                                                                   | `<sup> </sup>`                                    | None                                     | `This is a <sup>superscript</sup> text` | 这是 <sup>上标</sup> 文本    |
| 下划线                                                                                  | `<ins> </ins>`                                    | None                                     | `This is an <ins>underlined</ins> text` | 这是 <ins>带下划线</ins> 的文本 |

## 引用文本

可以使用 <kbd>></kbd>..

```markdown
Text that is not a quote

> Text that is a quote
```

带引号的文本在左侧通过竖线缩进，并以灰色字体显示。

![呈现GitHub Markdown 的屏幕截图，其中显示了普通文本和带引号的文本之间的差异。](/assets/images/help/writing/quoted-text-rendered.png)

> [!NOTE]
> 查看对话时，可以通过突出显示文本，然后键入 <kbd>R</kbd> 来自动引用批注中的文本。可以通过单击 <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-kebab-horizontal" aria-label="The horizontal kebab icon" role="img"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg>“ **报价”回复来引用**整个批注。 有关键盘快捷方式的详细信息，请参阅 [键盘快捷方式](/zh/get-started/accessibility/keyboard-shortcuts)。

## 引用代码

可以在句子中使用单个反引号来调用代码或命令。 使用反引号括起来的文本将不进行格式设置。 还可以按 <kbd>Command</kbd>+<kbd>E</kbd> （Mac） 或 <kbd>Ctrl </kbd>+<kbd>E</kbd>（Windows/Linux）键盘快捷方式，以便在 Markdown 行内插入代码块的反杆。

```markdown
Use `git status` to list all new or modified files that haven't yet been committed.
```

![呈现GitHub Markdown 的屏幕截图，其中显示由反杆包围的字符显示在固定宽度的字样中，以浅灰色突出显示。](/assets/images/help/writing/inline-code-rendered.png)

若要将代码或文本格式化为独立的块，请使用三个反引号。

````markdown
Some basic Git commands are:
```
git status
git add
git commit
```
````

![呈现GitHub Markdown 的屏幕截图，其中显示了一个简单的代码块，没有语法突出显示。](/assets/images/help/writing/code-block-rendered.png)

有关详细信息，请参阅“[创建和突显代码块](/zh/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)”。

如果经常编辑代码片段和表，则可能受益于在 GitHub 上启用对所有注释字段采用固定宽度字体。 有关详细信息，请参阅“[关于在GitHub上撰写和格式化](/zh/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/about-writing-and-formatting-on-github#enabling-fixed-width-fonts-in-the-editor)”。

## 支持的颜色模型

在问题、拉取请求和讨论中，可以使用反引号在句子中标记颜色。 反引号中支持的颜色模型将显示颜色的可视化效果。

```markdown
The background color is `#ffffff` for light mode and `#000000` for dark mode.
```

![呈现GitHub Markdown 的屏幕截图，其中显示了反杆中的 HEX 值如何创建颜色的小圆圈，此处为白色和黑色。](/assets/images/help/writing/supported-color-models-rendered.png)

下面是当前支持的颜色模型。

| 颜色   | Syntax                      | Example                             | 输出                                                                                                                                  |
| ---- | --------------------------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| 十六进制 | <code>\`#RRGGBB\`</code>    | <code>\`#0969DA\`</code>            | ![呈现GitHub Markdown 的屏幕截图，其中显示了 HEX 值 #0969DA 如何以蓝色圆圈显示。](/assets/images/help/writing/supported-color-models-hex-rendered.png)      |
| RGB  | <code>\`rgb(R,G,B)\`</code> | <code>\`rgb(9, 105, 218)\`</code>   | ![呈现GitHub Markdown 的屏幕截图，其中显示了 RGB 值 9、105、218 与蓝色圆圈的显示方式。](/assets/images/help/writing/supported-color-models-rgb-rendered.png)   |
| HSL  | <code>\`hsl(H,S,L)\`</code> | <code>\`hsl(212, 92%, 45%)\`</code> | ![呈现GitHub Markdown 的屏幕截图，其中显示了 HSL 值 212、92%、45% 与蓝色圆圈的显示方式。](/assets/images/help/writing/supported-color-models-hsl-rendered.png) |

> [!NOTE]
>
> * 支持的颜色模型在反引号中不能出现任何前导或尾随空格。
> * 颜色的可视化仅在问题、拉取请求和讨论中受支持。

## Links

可以通过将链接文本包装在括号 `[ ]`中，然后将 URL 包装在括号 `( )`中来创建内联链接。 还可以使用键盘快捷方式 <kbd>命令</kbd>+<kbd>K</kbd> 创建链接。 选择文本后，可以从剪贴板粘贴 URL 以自动从所选内容创建链接。

还可以通过突出显示文本并使用键盘快捷方式 <kbd>命令</kbd>+<kbd>V</kbd> 来创建 Markdown 超链接。 如果要将文本替换为链接，请使用键盘快捷方式 <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd>。

`This site was built using [GitHub Pages](https://pages.github.com/).`

![呈现GitHub Markdown 的屏幕截图，其中显示了括号中的文本“GitHub页面”如何显示为蓝色超链接。](/assets/images/help/writing/link-rendered.png)

> [!NOTE]
> GitHub 在批注中写入有效 URL 时自动创建链接。 有关详细信息，请参阅“[自动链接引用和 URL](/zh/get-started/writing-on-github/working-with-advanced-formatting/autolinked-references-and-urls)”。

## 章节链接

可以直接链接到具有标题的任何章节。 若要查看呈现文件中自动生成的定位点，请将鼠标悬停在章节标题上方以显示 <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-label="the link" role="img"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg> 图标，然后单击图标以在浏览器中显示定位点。

![存储库的自述文件的屏幕截图。 在部分标题的左侧，链接图标以深橙色标出。](/assets/images/help/repository/readme-links.png)

如果需要确定要编辑的文件中标题的定位点，可以使用以下基本规则：

* 字母转换为小写。
* 空格由连字符（`-`）替换。 删除任何其他空格或标点符号字符。
* 删除前导空格和尾随空格。
* 将删除标记格式，只保留内容（例如， `_italics_` 变为 `italics`）。
* 如果标题的自动生成的定位点与同一文档中的早期定位点相同，则通过追加连字符和自动递增整数来生成唯一标识符。

有关 URI 片段要求的详细信息，请参阅 [RFC 3986：统一资源标识符（URI）：通用语法，第 3.5 节](https://www.rfc-editor.org/rfc/rfc3986#section-3.5)。

下面的代码块演示了用于从呈现内容中的标题生成定位点的基本规则。

```markdown
# Example headings

## Sample Section

## This'll be a _Helpful_ Section About the Greek Letter Θ!
A heading containing characters not allowed in fragments, UTF-8 characters, two consecutive spaces between the first and second words, and formatting.

## This heading is not unique in the file

TEXT 1

## This heading is not unique in the file

TEXT 2

# Links to the example headings above

Link to the sample section: [Link Text](#sample-section).

Link to the helpful section: [Link Text](#thisll-be-a-helpful-section-about-the-greek-letter-Θ).

Link to the first non-unique section: [Link Text](#this-heading-is-not-unique-in-the-file).

Link to the second non-unique section: [Link Text](#this-heading-is-not-unique-in-the-file-1).
```

> [!NOTE]
> 如果您编辑标题，或更改具有相同锚点的标题顺序，您还需要更新指向这些标题的任何链接，因为锚点将会变化。

## 相对链接

您可以在渲染的文件中定义相对链接和图像路径，以帮助读者导航到仓库中的其他文件。

相对链接是相对于当前文件的链接。 例如，如果在仓库根目录下有一个自述文件，而在 docs/CONTRIBUTING.md 中有另一个文件，则自述文件中的 CONTRIBUTING.md 的相关链接如下所示 ：

```text
[Contribution guidelines for this project](docs/CONTRIBUTING.md)
```

GitHub 将根据你当前使用的分支自动转换相对链接或图像路径，从而使链接或路径始终有效。 链接的路径将相对于当前文件。 以 `/` 开头的链接将相对于存储库根目录。 可使用所有相对链接操作数，例如 `./` 和 `../`。

链接文本应位于一行上。 下面的示例将不起作用。

```markdown
[Contribution
guidelines for this project](docs/CONTRIBUTING.md)
```

相对链接更便于用户克隆仓库。 绝对链接可能无法用于仓库的克隆 - 建议使用相对链接引用仓库中的其他文件。

## 自定义定位点

可以使用标准 HTML 定位标记 （`<a name="unique-anchor-name"></a>`） 为文档中的任何位置创建导航定位点。 为了避免不明确的引用，请使用定位标记的唯一命名方案，例如向属性值添加前缀 `name` 。

> [!NOTE]
> 自定义锚点不会包含在文档大纲/目录中。

可以使用你为定位点提供的属性的值 `name` 链接到自定义定位点。 其语法与链接到标题自动生成的锚点时完全相同。

例如：

```markdown
# Section Heading

Some body text of this section.

<a name="my-custom-anchor-point"></a>
Some text I want to provide a direct link to, but which doesn't have its own heading.

(… more content…)

[A link to that custom anchor](#my-custom-anchor-point)
```

> [!TIP]
> 自定义锚点不会被自动标题链接的命名和编号行为所考虑。

## 换行符

如果要在存储库中编写问题、拉取请求或讨论， GitHub 将自动呈现换行符：

```markdown
This example
Will span two lines
```

但是，如果要在 .md 文件中编写，则上面的示例将在一行上呈现，且不带换行符。 若要在 .md 文件中创建换行符，需要包含以下项之一：

* 在第一行末尾包含两个空格。
  <pre>
  This example&nbsp;&nbsp;
  Will span two lines
  </pre>

* 在第一行末尾包含反斜杠。

  ```markdown
  This example\
  Will span two lines
  ```

* 在第一行末尾包括一个 HTML 单行分隔符标记。

  ```markdown
  This example<br/>
  Will span two lines
  ```

如果在两行之间留空行，则 .md 文件和 Markdown 在问题、拉取请求和讨论中都会呈现由空白行分隔的两行：

```markdown
This example

Will have a blank line separating both lines
```

## 映像

可以通过添加 <kbd>！</kbd> 并将替换文字包装在 `[ ]`. 替代文字是图像中信息的短文本等效项。 然后，将图像的链接包装在括号 `()`中。

`![Screenshot of a comment on a GitHub issue showing an image, added in the Markdown, of an Octocat smiling and raising a tentacle.](https://myoctocat.com/assets/images/base-octocat.svg)`

![有关GitHub问题的评论的屏幕截图，其中显示了一张在 Markdown 中添加的图像，该图像在八进制猫微笑和举起触角。](/assets/images/help/writing/image-rendered.png)

GitHub 支持将图像嵌入问题、拉取请求、讨论、注释和 `.md` 文件。 可以从存储库显示图像、添加联机图像的链接或上传图像。 有关详细信息，请参阅 [上传资产](#uploading-assets)。

> [!NOTE]
> 如果要显示存储库中的图像，请使用相对链接而不是绝对链接。

下面是使用相对链接显示图像的一些示例。

| 上下文                 | 相对链接                                                                   |
| ------------------- | ---------------------------------------------------------------------- |
| 在同一 `.md` 分支上的文件中   | `/assets/images/electrocat.png`                                        |
| 在另一 `.md` 分支上的文件中   | `/../main/assets/images/electrocat.png`                                |
| 在存储库的问题、拉取请求和评论中    | `../blob/main/assets/images/electrocat.png?raw=true`                   |
| 在另一个 `.md` 存储库中的文件中 | `/../../../../github/docs/blob/main/assets/images/electrocat.png`      |
| 在另一个存储库的议题、拉取请求和评论中 | `../../../github/docs/blob/main/assets/images/electrocat.png?raw=true` |

> [!NOTE]
> 仅当查看器至少对包含这些映像的专用存储库具有读取访问权限时，上表中的最后两个相对链接才适用于专用存储库中的映像。

有关详细信息，请参阅 [相对链接](#relative-links)。

### Picture（图片）元素

`<picture>`支持 HTML 元素。

## Lists

可以通过在一行或多行文本前面加上一<kbd>-</kbd><kbd>\*</kbd>行或多行文本<kbd>+</kbd>来创建无序列表。

```markdown
- George Washington
* John Adams
+ Thomas Jefferson
```

![呈现GitHub Markdown 的屏幕截图，其中显示了前三位美国总统姓名的项目符号列表。](/assets/images/help/writing/unordered-list-rendered.png)

若要对列表进行排序，请在每行前面加上一个数字。

```markdown
1. James Madison
2. James Monroe
3. John Quincy Adams
```

![呈现GitHub Markdown 的屏幕截图，其中显示了第四、第五和第六位美国总统姓名的编号列表。](/assets/images/help/writing/ordered-list-rendered.png)

### 嵌套列表

可以通过在另一项下方缩进一个或多个列表项来创建嵌套列表。

若要使用 Web 编辑器创建 GitHub 嵌套列表，或者使用单边字体的文本编辑器，例如 [Visual Studio Code](https://code.visualstudio.com/)，可以直观地对齐列表。 在嵌套列表项前面键入空格字符，直到列表标记字符（<kbd>-</kbd> 或 <kbd>\*</kbd>）直接位于其上方的项中的文本的第一个字符下方。

```markdown
1. First list item
   - First nested list item
     - Second nested list item
```

> [!NOTE]
> 在基于 Web 的编辑器中，可以先突出显示所需行，然后分别使用 <kbd>Tab</kbd> 或 <kbd>Shift</kbd>+<kbd>Tab</kbd> 来缩进或缩进一行或多行文本。

![Visual Studio Code 中 Markdown 的屏幕截图，显示嵌套编号行和项目符号的缩进。](/assets/images/help/writing/nested-list-alignment.png)

![呈现GitHub Markdown 的屏幕截图，其中显示了一个编号项，后跟两个不同级别的嵌套项目符号。](/assets/images/help/writing/nested-list-example-1.png)

若要在注释编辑器中创建嵌套列表，该编辑器 GitHub不使用单空格字体，可以在嵌套列表上方查看列表项，并计算项内容之前显示的字符数。 然后键入嵌套列表项前面的空格字符数。

在此示例中，可以通过将嵌套列表项缩进至少五个空格来在列表项下添加嵌套列表项`100. First list item`，因为前面`100. `有五个字符（`First list item`）。

```markdown
100. First list item
     - First nested list item
```

![呈现GitHub Markdown 的屏幕截图，其中显示编号为 100 的编号项，后跟嵌套一个级别的项目符号项。](/assets/images/help/writing/nested-list-example-3.png)

可以使用同一方法创建多个级别的嵌套列表。 例如，由于第一个嵌套列表项在嵌套列表内容`␣␣␣␣␣-␣`之前有七个字符（`First nested list item`），因此需要将第二个嵌套列表项缩进至少两个字符（最小 9 个空格）。

```markdown
100. First list item
     - First nested list item
       - Second nested list item
```

![呈现GitHub Markdown 的屏幕截图，其中显示编号为 100 的编号项，后跟两个不同级别的嵌套项目。](/assets/images/help/writing/nested-list-example-2.png)

有关更多示例，请参阅 [GitHub Flavored Markdown Spec](https://github.github.com/gfm/#example-265)。

## 任务列表

若要创建任务列表，请在列表项前加连字符和空格，后接 `[ ]`。 要将任务标记为完成，请使用 `[x]`。

```markdown
- [x] #739
- [ ] https://github.com/octo-org/octo-repo/issues/740
- [ ] Add delight to the experience when all tasks are complete :tada:
```

![显示 Markdown 的呈现版本的屏幕截图。 对问题的引用呈现为问题标题。](/assets/images/help/writing/task-list-rendered-simple.png)

如果任务列表项说明以括号开头，则需要使用 <kbd>\\</kbd>：

`- [ ] \(Optional) Open a followup issue`

有关详细信息，请参阅“[关于任务列表](/zh/get-started/writing-on-github/working-with-advanced-formatting/about-tasklists)”。

## 提及人员和团队

可以通过键入[](/zh/organizations/organizing-members-into-teams)其用户名或团队名称来提及人员或GitHub@。 这将触发通知并引起他们对对话的关注。 如果编辑批注以提及其用户名或团队名称，则人员也会收到通知。 有关通知的详细信息，请参阅 [关于通知](/zh/subscriptions-and-notifications/concepts/about-notifications)。

> [!NOTE]
> 只有当某人拥有存储库的读取权限，并且该存储库由组织拥有时，且该人是该组织的成员，才会收到有关提及的通知。

`@github/support What do you think about these updates?`

![呈现GitHub Markdown 的屏幕截图，其中显示了团队如何提及“@github/support”呈现为粗体、可单击的文本。](/assets/images/help/writing/mention-rendered.png)

提到父团队时，其子团队的成员也会收到通知，从而简化与多个人员组的通信。 有关详细信息，请参阅“[关于组织团队](/zh/organizations/organizing-members-into-teams/about-teams)”。

键入符号 <kbd>@</kbd> 将显示项目中的人员或团队列表。 在键入时，列表会筛选，因此，找到要查找的人员或团队的名称后，可以使用箭头键将其选中，然后按 Tab 或 Enter 以完成名称。 对于团队，请输入 @organization/team-name 该团队的所有成员将订阅对话。

自动完成结果仅限于存储库协作者和线程上的任何其他参与者。

## 引用问题和拉取请求

可以通过键入来 <kbd>#</kbd>显示存储库中建议的问题和拉取请求的列表。 键入问题或拉取请求编号或标题以筛选列表，然后按 Tab 或 Enter 以完成突出显示的结果。

有关详细信息，请参阅“[自动链接引用和 URL](/zh/get-started/writing-on-github/working-with-advanced-formatting/autolinked-references-and-urls)”。

## 引用外部资源

如果自定义自动链接引用配置用于仓库，则对外部资源（如 JIRA 议题或 Zendesk 事件单）的引用将转换为缩短的链接。 要了解在您的仓库中哪些自动链接可用，请联系拥有仓库管理员权限的人。 有关详细信息，请参阅“[配置自动链接以引用外部资源](/zh/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/configuring-autolinks-to-reference-external-resources)”。

## 上传素材

可以通过拖放、从文件浏览器选择或粘贴来上传图像等资产。 可以将资产上传到存储库中的问题、拉取请求、注释和 `.md` 文件。

## 使用表情符号

可以通过键入 `:EMOJICODE:`一个冒号，后跟表情符号的名称，将表情符号添加到你的写作中。

`@octocat :+1: This PR looks great - it's ready to merge! :shipit:`

![呈现GitHub Markdown 的屏幕截图，其中显示了 +1 和 shipit 如何以表情符号的形式直观呈现表情符号。](/assets/images/help/writing/emoji-rendered.png)

键入 <kbd>：</kbd> 将显示建议的表情符号列表。 键入时，列表将进行筛选，因此，找到要查找的表情符号后，按 **Tab** 或 **Enter** 以完成突出显示的结果。

有关可用表情符号和代码的完整列表，请参阅 [表情符号备忘单](https://github.com/ikatyang/emoji-cheat-sheet/blob/github-actions-auto-update/README.md)。

## Paragraphs

可以通过在文本行之间留空行来创建新段落。

## Footnotes

可以使用以下括号语法向内容添加脚注：

```text
Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].

[^1]: My reference.
[^2]: To add line breaks within a footnote, add 2 spaces to the end of a line.  
This is a second line.
```

脚注将如下所示呈现：

![已呈现的 Markdown 的屏幕截图，显示了用于指示脚注的上标数字，以及笔记中可选的换行符。](/assets/images/help/writing/footnote-rendered.png)

> [!NOTE]
> Markdown 中脚注的位置不会影响脚注的呈现位置。 可以在对脚注的引用后立即编写脚注，脚注仍将呈现在 Markdown 底部。 Wiki 不支持脚注。

## Alerts

**警报**（有时也称为 **标注** 或 **告诫**）是基于可用于强调关键信息的块语法的 Markdown 扩展。 打开 GitHub时，它们以独特的颜色和图标显示，以指示内容的重要性。

仅在提醒对于用户体验成功至关重要时使用，并将其限制为每篇文章一到两个，以防止信息过载。 此外，应避免连续放置警报。 警报不能嵌套在其他元素中。

要添加警报，请使用特定格式的引用块行来指定警报类型，后跟在标准引用块中的警报信息。 有五种类型的警报可用：

```markdown
> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.
```

下面是呈现的警报：

![呈现的 Markdown 警报的屏幕截图，显示了“注意”、“提示”、“重要事项”、“警告”和“注意事项”分别以不同的彩色文本和图标呈现的效果。](/assets/images/help/writing/alerts-rendered.png)

## 使用注释隐藏内容

可以通过将内容置于 HTML 注释中来告知 GitHub 隐藏呈现的 Markdown 中的内容。

```text
<!-- This content will not appear in the rendered Markdown -->
```

## 忽略 Markdown 格式

可以使用 Markdown 字符之前使用来指示 GitHub 忽略 Markdown 格式 <kbd>\\</kbd> （或转义）。

`Let's rename \*our-new-project\* to \*our-old-project\*.`

![呈现GitHub Markdown 的屏幕截图，其中显示了反斜杠如何防止星号转换为斜体。](/assets/images/help/writing/escaped-character-rendered.png)

有关反斜杠的详细信息，请参阅 Daring Fireball 的 [Markdown 语法](https://daringfireball.net/projects/markdown/syntax#backslash)。

> [!NOTE]
> 在问题或合并请求的标题中，Markdown 格式不会被忽略。

## 禁用 Markdown 渲染

查看 Markdown 文件时，可单击文件顶部的“Code”以禁用 Markdown 呈现并改为查看文件的源。\*\*\*\*

![仓库中的 Markdown 文件的屏幕截图，其中显示了用于与文件交互的选项。 标有“代码”的按钮用深橙色框出。](/assets/images/help/writing/display-markdown-as-source-global-nav-update.png)

禁用 Markdown 呈现使你能够使用源视图功能，例如行链接，这在查看呈现的 Markdown 文件时不可用。

## 延伸阅读

* [
  GitHub 风格 Markdown 规范](https://github.github.com/gfm/)
* [关于在GitHub上撰写和格式化](/zh/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/about-writing-and-formatting-on-github)
* [使用高级格式](/zh/get-started/writing-on-github/working-with-advanced-formatting)
* [GitHub上写作的快速入门指南](/zh/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github)