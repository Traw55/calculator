<script lang="ts">
   import Plus from "$lib/icon/Plus.svelte";
   import Multiply from "$lib/icon/Multiply.svelte";
   import Minus from "$lib/icon/Minus.svelte";
   import Division from "$lib/icon/Division.svelte";
   import BackspaceIcon from "$lib/icon/Backspace.svelte";
   import { onMount } from "svelte";

   let equation: string = "";

   /**
    * Adds a value (number or operator) to the current equation string.
    * Prevents consecutive operators for better UX and validation.
    */
   function addToEquation(value: string) {
      const isOperator = [" + ", " * ", " - ", " / "].includes(value);
      const endsWithOperator = /[\+\-\*\/]\s$/.test(equation);

      // Prevent starting with an operator (except maybe minus for negative numbers, but keeping it simple here)
      if (isOperator && equation === "") return;

      // Prevent consecutive operators
      if (isOperator && endsWithOperator) {
         // Replace the last operator with the new one
         equation = equation.substring(0, equation.length - 3) + value;
         return;
      }

      equation += value;
   }

   /**
    * Handles backspace logic, accounting for multi-character operators with spaces.
    */
   function backspace() {
      // Check if we are deleting an operator (e.g., " + ") which takes 3 characters
      const lastThree = equation.substring(equation.length - 3);
      const operators = [" + ", " * ", " - ", " / "];
      
      if (operators.includes(lastThree)) {
         equation = equation.substring(0, equation.length - 3);
      } else {
         equation = equation.substring(0, equation.length - 1);
      }
   }

   /**
    * Resets the equation.
    */
   function clear() {
      equation = "";
   }

   /**
    * Evaluates the equation and updates the result.
    * Uses a basic try-catch block for error handling (e.g., syntax errors).
    */
   function solve() {
      try {
         // Strict validation: check for consecutive operators or trailing operators
         // Although addToEquation prevents some of this, we check here for robustness.
         if (/[\+\-\*\/]{2,}/.test(equation.replace(/\s/g, '')) || /[\+\-\*\/]\s*$/.test(equation)) {
            throw new Error("Syntax Error");
         }

         // Note: eval is used here for simplicity in a client-side calculator.
         // In a production environment with user-supplied strings, a dedicated parser would be safer.
         let answer = eval(equation);
         if (answer === undefined) throw new Error("Invalid Equation");
         equation = String(answer);
      } catch (error) {
         handleError();
      }
   }

   /**
    * Visual feedback for calculation errors.
    */
   function handleError() {
      const output = document.getElementById("output");
      output?.classList.add("bg-red-500");
      setTimeout(() => {
         output?.classList.remove("bg-red-500");
      }, 500);
   }

   /**
    * Maps physical keyboard presses to calculator buttons.
    */
   function onKeyDown(e: KeyboardEvent) {
      const keyMap: Record<string, string> = {
         'Enter': '=',
         'Escape': 'Delete',
         '*': '*',
         '/': '/',
         '+': '+',
         '-': '-',
         'Backspace': 'Backspace'
      };

      const buttonId = keyMap[e.key] || e.key;
      const button = document.getElementById(buttonId);
      
      if (button) {
         button.click();
         button.focus();
         setTimeout(() => {
            (document.activeElement as HTMLElement)?.blur();
         }, 100);
      }
   }

   onMount(() => {
      // Use a single audio instance to avoid memory overhead
      const clickSound = new Audio('/click.wav');
      
      // Event delegation: attach listener to the container instead of every button
      const container = document.querySelector('.calculator-container');
      container?.addEventListener('click', (e) => {
         if ((e.target as HTMLElement).tagName === 'BUTTON') {
            clickSound.currentTime = 0; // Reset sound if already playing
            clickSound.play().catch(() => {}); // Catch potential play() interruptions
         }
      });
   });
</script>

<svelte:head>
   <title>آلة حاسبة احترافية | Professional Calculator</title>
</svelte:head>

<svelte:window on:keydown|preventDefault={onKeyDown} />

<main class="flex items-center justify-center min-h-screen bg-gray-100">
   <div
      class="calculator-container bg-blue-200 rounded-3xl grid grid-cols-4 gap-1 p-6 font-semibold text-xl shadow-2xl"
   >
      <!-- Display Screen -->
      <div
         id="output"
         class="bg-blue-500 rounded-xl col-span-4 min-h-12 flex items-center px-4 mb-2 text-white max-w-[12.75rem] break-all transition-colors duration-300"
      >
         {equation || "0"}
      </div>

      <!-- Control Row -->
      <button id="Delete" on:click={clear} class="bg-blue-950 text-white hover:opacity-90 transition-opacity">
         AC
      </button>
      <button id="Backspace" on:click={backspace} class="bg-[#f3f6fc] hover:bg-gray-200 transition-colors">
         <BackspaceIcon />
      </button>
      <button id="%" on:click={() => addToEquation(" / 100")} class="bg-[#f3f6fc] hover:bg-gray-200 transition-colors">
         %
      </button>
      <button
         id="+"
         on:click={() => addToEquation(" + ")}
         class="bg-[#63dc74] text-white hover:opacity-90 transition-opacity"
      >
         <Plus />
      </button>

      <!-- Number Rows -->
      <button id="7" on:click={() => addToEquation("7")} class="hover:bg-gray-50 transition-colors"> 7 </button>
      <button id="8" on:click={() => addToEquation("8")} class="hover:bg-gray-50 transition-colors"> 8 </button>
      <button id="9" on:click={() => addToEquation("9")} class="hover:bg-gray-50 transition-colors"> 9 </button>
      <button
         id="-"
         on:click={() => addToEquation(" - ")}
         class="bg-[#fd3f59] text-white hover:opacity-90 transition-opacity"
      >
         <Minus />
      </button>

      <button id="4" on:click={() => addToEquation("4")} class="hover:bg-gray-50 transition-colors"> 4 </button>
      <button id="5" on:click={() => addToEquation("5")} class="hover:bg-gray-50 transition-colors"> 5 </button>
      <button id="6" on:click={() => addToEquation("6")} class="hover:bg-gray-50 transition-colors"> 6 </button>
      <button
         id="/"
         on:click={() => addToEquation(" / ")}
         class="bg-[#2285fd] text-white hover:opacity-90 transition-opacity"
      >
         <Division />
      </button>

      <button id="1" on:click={() => addToEquation("1")} class="hover:bg-gray-50 transition-colors"> 1 </button>
      <button id="2" on:click={() => addToEquation("2")} class="hover:bg-gray-50 transition-colors"> 2 </button>
      <button id="3" on:click={() => addToEquation("3")} class="hover:bg-gray-50 transition-colors"> 3 </button>
      <button
         id="*"
         on:click={() => addToEquation(" * ")}
         class="bg-[#f9c80e] text-white hover:opacity-90 transition-opacity"
      >
         <Multiply />
      </button>

      <!-- Bottom Row -->
      <button id="." on:click={() => addToEquation(".")} class="hover:bg-gray-50 transition-colors"> . </button>
      <button id="0" on:click={() => addToEquation("0")} class="hover:bg-gray-50 transition-colors"> 0 </button>
      <button id="=" on:click={solve} class="col-span-2 bg-[#f3f6fc] hover:bg-gray-200 transition-colors"> = </button>
   </div>
</main>

<style>
   /* Style for all buttons to ensure consistent look */
   button {
      @apply rounded-xl p-4 flex items-center justify-center active:scale-95 transition-transform;
   }
</style>
