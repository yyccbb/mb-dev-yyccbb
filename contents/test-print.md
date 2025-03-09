<panel header="Which are unsafe practices?" expanded>

Which of these are unsafe coding practices?

- [ ] a. `case` statements without a `default` clause

- [ ] b. Omitting braces when a code block has only one statement

  e.g writing this

    ```
    if(isProper)
        return PROPER_AMOUNT;
    ```

  instead of

    ```
    if(isProper){
        return PROPER_AMOUNT;
    }
    ```

- [ ] c. Using a variable just to explain what’s going on

  e.g.writing this

    ```
    boolean isProper = notNull && notEmpty;
    return isProper;
    ```

  instead of

    ```
    return notNull && notEmpty;
    ```

<panel type="seamless" header="Answer" minimized>

a, b.

Reason why [c] is not a bad practice: The extra variable helps to make the code more understandable because it makes the intent of the formula clearer.

</panel>
</panel>

<panel header="Which are unsafe practices?" expand-headerless>

Which of these are unsafe coding practices?

- [ ] a. `case` statements without a `default` clause

- [ ] b. Omitting braces when a code block has only one statement

  e.g writing this

    ```
    if(isProper)
        return PROPER_AMOUNT;
    ```

  instead of

    ```
    if(isProper){
        return PROPER_AMOUNT;
    }
    ```

- [ ] c. Using a variable just to explain what’s going on

  e.g.writing this

    ```
    boolean isProper = notNull && notEmpty;
    return isProper;
    ```

  instead of

    ```
    return notNull && notEmpty;
    ```

<panel type="seamless" header="Answer" minimized>

a, b.

Reason why [c] is not a bad practice: The extra variable helps to make the code more understandable because it makes the intent of the formula clearer.

</panel>
</panel>