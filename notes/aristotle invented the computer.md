# how aristotle invented the computer

- [Chris Dixon](https://www.theatlantic.com/technology/archive/2017/03/aristotle-computer/518697/), 2017

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

⠀ ⠀ 

---

## full highlights and notes

The history of computers is better understood as a history of ideas, mainly ideas that emerged from mathematical logic, an obscure and cult-like discipline that first developed in the 19th century. 

Mathematical logic was pioneered by philosopher-mathematicians

George Boole and Gottlob Frege, themselves inspired by Leibniz’s dream of a universal “concept language,” and the ancient logical system of Aristotle.

As one computer scientist commented: “If, in 1901, a talented and sympathetic outsider had been called upon to survey the sciences and name the branch which would be least fruitful in [the] century ahead, his choice might well have settled upon mathematical logic.” And yet, it would provide the foundation for a field that would have more impact on the modern world than any other. 

The evolution of computer science from mathematical logic culminated in the 1930s: 


- Claude Shannon’s “A Symbolic Analysis of Switching and Relay Circuits” 
	- Shannon’s paper as “possibly the most important, and also the most noted, master’s thesis of the century.” Shannon wrote it as an electrical engineering student at MIT. His adviser, Vannevar Bush, built a prototype computer known as the Differential Analyzer that could rapidly calculate differential equations. The device was mostly mechanical, with subsystems controlled by electrical relays, which were organized in an ad hoc manner as there was not yet a systematic theory underlying circuit design. Shannon’s thesis topic came about when Bush recommended he try to discover such a theory. Shannon’s paper is in many ways a typical electrical-engineering paper, filled with equations and diagrams of electrical circuits. What is unusual is that the primary reference was a 90-year-old work of mathematical philosophy, George Boole’s The Laws of Thought.

- Alan Turing’s “On Computable Numbers, With an Application to the Entscheidungsproblem.” 

In 1938, Boole was rarely read outside of philosophy departments.
> “It just happened that no one else was familiar with both fields at the same time,” he commented later.


#### Boole and Aristotle


Boole is often described as a mathematician, but he saw himself as a philosopher, following in the footsteps of Aristotle.

He pays tribute to Aristotle, the inventor of logic, and the primary influence on his own work:
> In its ancient and scholastic form, indeed, the subject of Logic stands almost exclusively associated with the great name of Aristotle. As it was presented to ancient Greece in the partly technical, partly metaphysical disquisitions of The Organon, such, with scarcely any essential change, it has continued to the present day. 


Trying to improve on the logical work of Aristotle was an intellectually daring move. Aristotle’s logic, presented in his six-part book The Organon, occupied a central place in the scholarly canon for more than 2,000 years. It was widely believed that Aristotle had written almost all there was to say on the topic. 


- The great philosopher Immanuel Kant commented that, since Aristotle, logic had been “unable to take a single step forward, and therefore seems to all appearance to be finished and complete.”

Aristotle’s central observation was that arguments were valid or not based on their logical structure, independent of the non-logical words involved. The most famous argument schema he discussed is known as the syllogism: 


1. All men are mortal.
2. Socrates is a man.
3. Therefore, Socrates is mortal.

You can replace “Socrates” with any other object, and “mortal” with any other predicate, and the argument remains valid. The validity of the argument is determined solely by the logical structure. The logical words — “all,” “is,” are,” and “therefore” — are doing all the work.

Aristotle also defined a set of basic axioms from which he derived the rest of his logical system: 


- An object is what it is (Law of Identity)
- No statement can be both true and false (Law of Non-contradiction)
- Every statement is either true or false (Law of the Excluded Middle) 

These axioms weren’t meant to describe how people actually think (that would be the realm of psychology), but how an idealized, perfectly rational person ought to think.

Aristotle’s axiomatic method influenced an even more famous book, Euclid’s Elements, which is estimated to be second only to the Bible in the number of editions printed.


- Although ostensibly about geometry, the Elements became a standard textbook for teaching rigorous deductive reasoning. (Abraham Lincoln once said that he learned sound legal argumentation from studying Euclid.)
- In Euclid’s system, geometric ideas were represented as spatial diagrams. Geometry continued to be practiced this way until René Descartes, in the 1630s, showed that geometry could instead be represented as formulas. His Discourse on Method was the first mathematics text in the West to popularize what is now standard algebraic notation — x, y, z for variables, a, b, c for known quantities, and so on.
- This shifted the dominant mode of mathematics from diagrams to formulas, leading to, among other things, the development of calculus, invented roughly 30 years after Descartes by, independently, Isaac Newton and Gottfried Leibniz.

Boole’s goal was to do for Aristotelean logic what Descartes had done for Euclidean geometry: free it from the limits of human intuition by giving it a precise algebraic notation.

The Laws of Thought created a new scholarly field—mathematical logic—which in the following years became one of the most active areas of research for mathematicians and philosophers. Bertrand Russell called the Laws of Thought “the work in which pure mathematics was discovered.”

The Laws of Thought begins with a description of his goals, to investigate the fundamental laws of the operation of the human mind: The design of the following treatise is to investigate the fundamental laws of those operations of the mind by which reasoning is performed; to give expression to them in the symbolical language of a Calculus, and upon this foundation to establish the science of Logic ... and, finally, to collect ... some probable intimations concerning the nature and constitution of the human mind. 

#### Shannon and Boole


Shannon’s insight was that Boole’s system could be mapped directly onto electrical circuits. At the time, electrical circuits had no systematic theory governing their design. Shannon realized that the right theory would be “exactly analogous to the calculus of propositions used in the symbolic study of logic.”

By stringing these adder circuits together, arbitrarily complex arithmetical operations could be constructed. These circuits would become the basic building blocks of what are now known as arithmetical logic units, a key component in modern computers.


- (This distinction has become so fundamental to computer science that it might seem surprising to modern readers how insightful it was at the time—a reminder of the adage that “the philosophy of one century is the common sense of the next.”)

Since Shannon’s paper, a vast amount of progress has been made on the physical layer of computers, including the invention of the transistor in 1947 by William Shockley and his colleagues at Bell Labs.

Transistors are dramatically improved versions of Shannon’s electrical relays — the best known way to physically encode Boolean operations.

A 2016 iPhone has about 3.3 billion transistors

Shannon showed how to map logic onto the physical world, Turing showed how to design computers in the language of mathematical logic.

### Alan Turing


Turing wrote his paper, in 1936, he was trying to solve “the decision problem,” first identified by the mathematician David Hilbert, who asked whether there was an algorithm that could determine whether an arbitrary mathematical statement is true or false.

Turing’s paper is highly technical. Its primary historical significance lies not in its answer to the decision problem, but in the template for computer design it provided along the way.

Turing was working in a tradition stretching back to Gottfried Leibniz, the philosophical giant who developed calculus independently of Newton. Among Leibniz’s many contributions to modern thought, one of the most intriguing was the idea of a new language he called the “universal characteristic” that, he imagined, could represent all possible mathematical and scientific knowledge. Inspired in part by the 13th-century religious philosopher Ramon Llull, Leibniz postulated that the language would be ideographic like Egyptian hieroglyphics, except characters would correspond to “atomic” concepts of math and science. He argued this language would give humankind an “instrument” that could enhance human reason “to a far greater extent than optical instruments” like the microscope and telescope.

The first credible attempt to realize Leibniz’s dream came in 1879, when the German philosopher Gottlob Frege published his landmark logic treatise Begriffsschrift. Inspired by Boole’s attempt to improve Aristotle’s logic, Frege developed a much more advanced logical system. The logic taught in philosophy and computer-science classes today—first-order or predicate logic—is only a slight modification of Frege’s system.


- Frege is generally considered one of the most important philosophers of the 19th century. Among other things, he is credited with catalyzing what noted philosopher Richard Rorty called the “linguistic turn” in philosophy. As Enlightenment philosophy was obsessed with questions of knowledge, philosophy after Frege became obsessed with questions of language. His disciples included two of the most important philosophers of the 20th century—Bertrand Russell and Ludwig Wittgenstein.
- The major innovation of Frege’s logic is that it much more accurately represented the logical structure of ordinary language. Among other things, Frege was the first to use quantifiers (“for every,” “there exists”) and to separate objects from predicates. He was also the first to develop what today are fundamental concepts in computer science like recursive functions and variables with scope and binding.
- Frege’s formal language — what he called his “concept-script” — is made up of meaningless symbols that are manipulated by well-defined rules. The language is only given meaning by an interpretation, which is specified separately (this distinction would later come to be called syntax versus semantics).
- Bertrand Russell famously quipped: “Mathematics may be defined as the subject in which we never know what we are talking about, nor whether what we are saying is true.”

An unexpected consequence of Frege’s work was the discovery of weaknesses in the foundations of mathematics. For example, Euclid’s Elements — considered the gold standard of logical rigor for thousands of years — turned out to be full of logical mistakes.

This realization created a crisis in the foundation of mathematics. If the Elements — the bible of mathematics — contained logical mistakes, what other fields of mathematics did too? What about sciences like physics that were built on top of mathematics?

Mathematicians started rebuilding the foundations of mathematics from the bottom up. In 1889, Giuseppe Peano developed axioms for arithmetic, and in 1899, David Hilbert did the same for geometry. Hilbert also outlined a program to formalize the remainder of mathematics, with specific requirements that any such attempt should satisfy, including: 


- Completeness: There should be a proof that all true mathematical statements can be proved in the formal system. 
- Decidability: There should be an algorithm for deciding the truth or falsity of any mathematical statement. (This is the “Entscheidungsproblem” or “decision problem” referenced in Turing’s paper.)

Rebuilding mathematics in a way that satisfied these requirements became known as Hilbert’s program. Up through the 1930s, this was the focus of a core group of logicians including Hilbert, Russell, Kurt Gödel, John Von Neumann, Alonzo Church, and, of course, Alan Turing. 

Hilbert’s program proceeded on at least two fronts. On the first front, logicians created logical systems that tried to prove Hilbert’s requirements either satisfiable or not. On the second front, mathematicians used logical concepts to rebuild classical mathematics.


- The historian Thomas Kuhn once observed that “in science, novelty emerges only with difficulty.” Logic in the era of Hilbert’s program was a tumultuous process of creation and destruction.

This sentence is false. If it is true then it is false, and if it is false then it is true, leading to an endless loop of self-contradiction.

Let R be the set of all sets that are not members of themselves. If R is not a member of itself, then its definition dictates that it must contain itself, and if it contains itself, then it contradicts its own definition as the set of all sets that are not members of themselves. This became known as Russell’s paradox and was seen as a serious flaw in Frege’s achievement. 


- (Frege himself was shocked by this discovery. He replied to Russell: “Your discovery of the contradiction caused me the greatest surprise and, I would almost say, consternation, since it has shaken the basis on which I intended to build my arithmetic.”)

Russell and his colleague Alfred North Whitehead put forth the most ambitious attempt to complete Hilbert’s program with the Principia Mathematica, published in three volumes between 1910 and 1913. The Principia’s method was so detailed that it took over 300 pages to get to the proof that 1+1=2.


- Russell and Whitehead tried to resolve Frege’s paradox by introducing what they called type theory. The idea was to partition formal languages into multiple levels or types. Each level could make reference to levels below, but not to their own or higher levels. This resolved self-referential paradoxes by, in effect, banning self-reference. (This solution was not popular with logicians, but it did influence computer science — most modern computer languages have features inspired by type theory.)

The first blow came in 1931, when Gödel published his now famous incompleteness theorem, which proved that any consistent logical system powerful enough to encompass arithmetic must also contain statements that are true but cannot be proven to be true. (Gödel’s incompleteness theorem is one of the few logical results that has been broadly popularized, thanks to books like Gödel, Escher, Bach and The Emperor’s New Mind).

The final blow came when Turing and Alonzo Church independently proved that no algorithm could exist that determined whether an arbitrary mathematical statement was true or false.


- Turing’s key insight came in the first section of his famous 1936 paper, “On Computable Numbers, With an Application to the Entscheidungsproblem.” In order to rigorously formulate the decision problem (the “Entscheidungsproblem”), Turing first created a mathematical model of what it means to be a computer (today, machines that fit this model are known as “universal Turing machines”).
- As the logician Martin Davis describes it: Turing knew that an algorithm is typically specified by a list of rules that a person can follow in a precise mechanical manner, like a recipe in a cookbook. He was able to show that such a person could be limited to a few extremely simple basic actions without changing the final outcome of the computation. Then, by proving that no machine performing only those basic actions could determine whether or not a given proposed conclusion follows from given premises using Frege’s rules, he was able to conclude that no algorithm for the Entscheidungsproblem exists. As a byproduct, he found a mathematical model of an all-purpose computing machine.

This was the first rigorous demonstration that any computing logic that could be encoded in hardware could also be encoded in software. The architecture Turing described was later dubbed the “Von Neumann architecture” — but modern historians generally agree it came from Turing, as, apparently, did Von Neumann himself. 
