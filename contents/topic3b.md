<frontmatter>
  title: Topic 3b
</frontmatter>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>




<question type="mcq" header="Which of these **contradicts** the heuristics recommended when creating test 
cases with multiple inputs?">
  <!-- Insert the reason for the option using the reason attribute -->
  <q-option reason="This is **correct**. We need to figure out if a positive test case works!">
    Each valid test input should appear at least once in a test case that doesn’t have any invalid inputs.
  </q-option>
  <q-option>
    It is ok to combine valid values for different inputs.
  </q-option>
  <q-option>
    No more than one invalid test input should be in a given test case.
  </q-option>
  <!-- Use the 'correct' attribute to indicate an option as correct. -->
  <q-option correct>
    All invalid test inputs must be tested together.
    <!-- Optionally, you may use a reason slot instead of a reason attribute. -->
    <div slot="reason">
    If you test all invalid test inputs together, you will not know if each one of the invalid inputs are handled
    correctly by the SUT.
    This is because most SUTs return an error message upon encountering the first invalid input.
    </div>
  </q-option>
  <div slot="hint">
  How do you figure out which inputs are wrong? (or correct)
  </div>
</question>
