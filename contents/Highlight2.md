<frontmatter>
  title: Substring Highlighting
</frontmatter>

```java {.line-numbers highlight-lines="1[:]@pink,3['Inventory']@blue,3[4::6]@orange,4['It\'s designed']@#000000,5@rgb(120, 130, 250),6[8:15]@purple,6[18:]@yellow,8[0::2],12[:]-14@y,16-18,20[12:]-22,24[1::]-26"}
import java.util.List;

// Inventory is a class that stores inventory items in a list.
// It's designed as a thin wrapper on the List interface.
public class Inventory {
    private List<Item> items;

    public int getItemCount(){
        return items.size();
    }

    public bool isEmpty() {
        return items.isEmpty();
    }

    public Item getItem(idx: int) {
        return items.get(idx);
    }

    public void addItem(item: Item) {
        return items.add(item);
    }

    public void removeItem(item: Item) {
        return items.remove(item);
    }
}
```
