<script lang="ts">
   import Plus from "$lib/icon/Plus.svelte";
   import Multiply from "$lib/icon/Multiply.svelte";
   import Minus from "$lib/icon/Minus.svelte";
   import Division from "$lib/icon/Division.svelte";
   import BackspaceIcon from "$lib/icon/Backspace.svelte";
   import { onMount } from "svelte";

   function addToEquation(value: string) {
      equation += value;
   }

   function backspace() {
      switch (equation.substring(equation.length - 3, equation.length)) {
         case " + ":
         case " * ":
         case " - ":
         case " / ":
            equation = equation.substring(0, equation.length - 3);
            break;
         default:
            equation = equation.substring(0, equation.length - 1);
      }
   }

   function clear() {
      equation = "";
   }

   function solve() {
      try {
         let answer = eval(equation);
         if (answer == undefined) throw SyntaxError;
         equation = answer;
      } catch (error) {
         let output = document.getElementById("output");
         output?.classList.add("bg-red-500");
         setTimeout(() => {
            output?.classList.remove("bg-red-500");
         }, 500);
      }
   }

   let equation: string = "";

   function onKeyDown(e: KeyboardEvent) {
      let button = document.getElementById(e.key);
      button?.click();
      button?.focus();
      setTimeout(() => {
         // @ts-ignore
         document.activeElement?.blur();
      }, 100);
   }

   onMount(() => {
        let allButtons = document.getElementsByTagName('button');
        for (let i = 0; i < allButtons.length; i++) {
            allButtons[i].addEventListener('click', () => {
                new Audio('/click.wav').play();
            });
        }
    });
</script>

<svelte:head>
   <title>آلة حاسبة</title>
</svelte:head>

<svelte:window on:keydown|preventDefault={onKeyDown} />

<div
   class="bg-blue-200 rounded-3xl grid grid-cols-4 gap-1 p-6 font-semibold text-xl shadow-2xl"
>
   <div
      id="output"
      class="bg-blue-500 rounded-xl col-span-4 min-h-12 flex items-center px-4 mb-2 text-white max-w-[12.75rem] break-all"
   >
      {equation}
   </div>
   <button id="Delete" on:click={clear} class="bg-blue-950 text-white">
      AC
   </button>
   <button id="Backspace" on:click={backspace} class="bg-[#f3f6fc]">
      <BackspaceIcon />
   </button>
   <button id="%" on:click={() => addToEquation(" / 100")} class="bg-[#f3f6fc]">
      %
   </button>
   <button
      id="+"
      on:click={() => addToEquation(" + ")}
      class="bg-[#63dc74] text-white"
   >
      <Plus />
   </button>
   <button id="7" on:click={() => addToEquation("7")}> 7 </button>
   <button id="8" on:click={() => addToEquation("8")}> 8 </button>
   <button id="9" on:click={() => addToEquation("9")}> 9 </button>
   <button
      id="-"
      on:click={() => addToEquation(" - ")}
      class="bg-[#fd3f59] text-white"
   >
      <Minus />
   </button>
   <button id="4" on:click={() => addToEquation("4")}> 4 </button>
   <button id="5" on:click={() => addToEquation("5")}> 5 </button>
   <button id="6" on:click={() => addToEquation("6")}> 6 </button>
   <button
      id="/"
      on:click={() => addToEquation(" / ")}
      class="bg-[#2285fd] text-white"
   >
      <Division />
   </button>
   <button id="1" on:click={() => addToEquation("1")}> 1 </button>
   <button id="2" on:click={() => addToEquation("2")}> 2 </button>
   <button id="3" on:click={() => addToEquation("3")}> 3 </button>
   <button
      id="*"
      on:click={() => addToEquation(" * ")}
      class="bg-[#f9c80e] text-white"
   >
      <Multiply />
   </button>
   <button id="." on:click={() => addToEquation(".")}> . </button>
   <button id="0" on:click={() => addToEquation("0")}> 0 </button>
   <button id="=" on:click={solve} class="col-span-2 bg-[#f3f6fc]"> = </button>
</div>
