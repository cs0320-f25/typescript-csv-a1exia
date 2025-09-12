# Sprint 1: TypeScript CSV

### Task C: Proposing Enhancement

- #### Step 1: Brainstorm on your own.
Since the current code seems to be turning the csv fields into strings,
it could be frustrating if you are trying to have different types assigned
to numbers. Additionally, when writing numbers from the example provided,
sometimes a number could be spelled out instead of using numbers which may
not yield the results we want, so I wonder if there could be some kind of type
checking to ensure that fields stay consistent. Something that could be underspecified
is the fact that there could or could not be headings, which is important
to somehow clarify since those fields would not necessarily be data points as much
as identifiers. Lastly, I think there should be more clarity in how it actually 
parses the information since in some of my tests, I discovered that even if commas
were a part of a string that was a field, it would still seperate it instead
of keeping it as one field.

- #### Step 2: Use an LLM to help expand your perspective.
In my first prompt to Copilot, I copy and pasted the exact wording provided from
the handout just to get a sense of how the AI would respond to this kind of question.
The ideas it had were very similar to mine, such as ensuring that the parser had some
ability of detecting the types that the caller uses or also some kind of 
header support so that the user can specify whether or not they want the first
row to be titles for the columns. It also had some cases that I did not consider
yet, such as if a field spans multiple lines or how it would handle a skipped field,
meaning the column was incomplete. 

In my first edit to the prompt, I tried asking how I could make fixes and enhancements 
- #### Step 3: use an LLM to help expand your perspective.

    Include a list of the top 4 enhancements or edge cases you think are most valuable to explore in the next week’s sprint. Label them clearly by category (extensibility vs. functionality), and include whether they came from you, the LLM, or both. Describe these using the User Story format—see below for a definition. 

    Include your notes from above: what were your initial ideas, what did the LLM suggest, and how did the results differ by prompt? What resonated with you, and what didn’t? (3-5 sentences.) 

### Design Choices

### 1340 Supplement

- #### 1. Correctness

- #### 2. Random, On-Demand Generation

- #### 3. Overall experience, Bugs encountered and resolved
#### Errors/Bugs:
#### Tests:
#### How To…

#### Team members and contributions (include cs logins):

#### Collaborators (cslogins of anyone you worked with on this project and/or generative AI):
#### Total estimated time it took to complete project:
#### Link to GitHub Repo:  
