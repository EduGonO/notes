# how aristotle invented the computer

- [chris dixon](https://www.theatlantic.com/technology/archive/2017/03/aristotle-computer/518697/), 2017

- ---

aristotle → euclid → descartes → leibniz → boole → shannon → frege → hilbert → turing

⠀ ⠀ 

**Aristotle**'s logic, found in the six-part book the [Organon](https://en.wikipedia.org/wiki/Organon), had been a central part in philosophy for more than 2,000 years. Trying to improve on it was considered almost impossible. 
- Immanuel Kant once commented that since Aristotle, logic has been *"unable to take a single step forward, and therefore seems to all appearance to be finished and complete."*

    1. All men are mortal.
    2. Socrates is a man.
    3. Therefore, Socrates is mortal.

- The example above, "Socrates" can be replaced by any name and the argument remains valid. The logical structure and validity are ∴ determined by "all", "are", "is" and "therefore". 
- Aristotle's logic namely inspired [Euclid's Elements](https://en.wikipedia.org/wiki/Euclid%27s_Elements) (-300s), which described geometry as visual diagrams and became the default system until René **Descartes** showed how to represent geometry as formulas (1630s). 
    - Around 30 years later, the shift from diagrams to formulas lead to the development of calculus, by Newton and Leibniz, independently.

George **Boole** (1815-1864) is often considered a mathematician but he saw himself as a philosopher. He wanted to represent Aristotle's logic with formulas, like Descartes had done with Euclides's ideas. 
- His goal was to create a symbolical ideographic universal language representing all possible mathematical and scientific knowledge. He proposed his system in [The Laws of Thought](https://en.wikipedia.org/wiki/The_Laws_of_Thought) (1854), which eventually created the field of mathematical logic.
- Claude **Shannon** realized that Boole's system of logic could be physically encoded in electrical circuits. He described the process in a 1937 electrical-engineering [paper](https://www.cs.virginia.edu/~evans/greatworks/shannon38.pdf), which was inspired by Boole's 90-year-old philosophical ideas.
- His work inspired vast amount of progress in combining electrical circuits, which eventually led to the invention of the transistor in 1947. Phones in 2016 had about 3.3bn transistors.

⠀ 

Gottlob **Frege** (1848-1925) developed a much more advanced logical system in [Bergriffsschrift](https://en.wikipedia.org/wiki/Begriffsschrift) (1879), the logic system taught in philosophy and computer science classes today.
- Ferge's language of meaningless symbols manipulated by defined rules, [concept-script](https://en.wikipedia.org/wiki/Calculus_ratiocinator), separated objects from predicates and used quantifies ( ∀, ∃ ) to develop some of computer science's fundamental concepts like recursive functions and variables. 
- Philosophy after Frege was about questions of language, not knowledge. Two of his disciples were Russell and **Wittgenstein** → [linguistic turn](https://en.wikipedia.org/wiki/Linguistic_turn#:~:text=The%20linguistic%20turn%20was%20a,language%20users%2C%20and%20the%20world)
- Unexpectedly, ::Ferge's work also exposed many logical mistakes in Euclid's Elements::, which had been the standard in logical rigor (math bible) for ≈2000 years, and sparked a crisis in the foundation of mathematics: what about physics which is built *on top* of math?
	- The restructuring of mathematics' foundations was mostly led by [David Hilbert](https://en.wikipedia.org/wiki/David_Hilbert), who specified a program to formalize all of mathematics' logic.
	- Until the 1930s, this program was the focus of a core group of logicians, notably Russell, Gödel, Von Neumann, Church and obvio, [Turing](https://en.wikipedia.org/wiki/Alan_Turing).

**Turing**'s 1936 paper *"[On Computable Numbers, with an application to the Entscheidungsproblem](https://www.astro.puc.cl/~rparra/tools/PAPERS/turing_1936.pdf)"* was a response to Hilbert's *[decision problem](https://en.wikipedia.org/wiki/Entscheidungsproblem)*, which asked if there's an algorithm capable of determining if any arbitrary mathematical statement is true or false. 
- His insight came from creating a mathematical model of a computer to find that the computation could still be done correctly even if the computer is limited to few simple actions, but since the only was to find the result is to do the computations, ∄ an algorithm that fulfills Hilbert's *decision problem*.

The significance of Turing's paper lies not in its answer but in the blueprint for computer design Turing provided along the way.

> Shannon showed how to map logic onto the physical world, Turing showed how to design computers in the language of mathematical logic.

⠀ ⠀ 
