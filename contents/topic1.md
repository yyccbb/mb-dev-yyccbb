<frontmatter>
  pageNav: 2
  pageNavTitle: Test Title
</frontmatter>

<page-nav-print />

```python 
function checkForWrappingAndAddLineNumbers() {
  document.querySelectorAll('pre > code.hljs').forEach((block) => {
    // Check if any line within the block is wrapped
    const isWrapped = Array.from(block.querySelectorAll('span')).some(line => line.scrollWidth > line.clientWidth);

    if (isWrapped) {
      // Add .line-numbers class to enable line numbering for wrapped lines
      block.classList.add('line-numbers-print');
    }
});
}
```
# header lvl 1

## Header 1_2

### test header lvl 3
#### test header lvl 4

<panel header="Which are unsafe practices?" preload>

<panel type="seamless" header="Answer" minimized>

a, b.

Reason why [c] is not a bad practice: The extra variable helps to make the code more understandable because it makes the intent of the formula clearer.

</panel>
</panel>

```python
a = 1
b = 2
print(a**b)
```