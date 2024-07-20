<script lang="ts">
   import Plus from'$lib/icon/Plus.svelte';
   import Multiply from'$lib/icon/Multiply.svelte';
   import Minus from'$lib/icon/Minus.svelte';
   import Division from'$lib/icon/Division.svelte';
   import BackspaceIcon from'$lib/icon/Backspace.svelte';

   function addToEquation(value : string){
      equation += value;
   }

   function backspace() {
      switch (equation.substring(equation.length - 3, equation.length)){
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
   
   function clear(){
      equation = "";
   }

   function solve(){
      equation = eval(equation);
   }

   let equation: string = "";
</script>

<svelte:head>
    <title>آلة حاسبة</title>
</svelte:head>

<div class="bg-blue-200  rounded-3xl grid grid-cols-4 gap-1 p-6 font-semibold text-xl shadow-2xl">

<div class="bg-blue-500 rounded-xl col-span-4 min-h-12 flex items-center px-4 mb-2 text-white max-w-[12.75rem] break-all">
    {equation}
</div>
    <button on:click={clear} class="bg-blue-950 text-white"> AC </button>
    <button on:click={backspace} class="bg-[#f3f6fc]">
      <BackspaceIcon />
    </button>
    <button on:click={() => addToEquation(" / 100")} class="bg-[#f3f6fc]"> % </button>
    <button on:click={() => addToEquation(" + ")} class="bg-[#63dc74] text-white"> 
      <Plus/> 
    </button>
    <button on:click={() => addToEquation("7")}> 7 </button>
    <button on:click={() => addToEquation("8")}> 8 </button>
    <button on:click={() => addToEquation("9")}> 9 </button>
    <button on:click={() => addToEquation(" - ")} class="bg-[#fd3f59] text-white">
       <Minus />
    </button>
    <button on:click={() => addToEquation("4")}> 4 </button>
    <button on:click={() => addToEquation("5")}> 5 </button>
    <button on:click={() => addToEquation("6")}> 6 </button>
    <button on:click={() => addToEquation(" / ")} class="bg-[#2285fd] text-white"> 
      <Division />
    </button>
    <button on:click={() => addToEquation("1")}> 1 </button>
    <button on:click={() => addToEquation("2")}> 2 </button>
    <button on:click={() => addToEquation("3")}> 3 </button>
    <button on:click={() => addToEquation(" * ")} class="bg-[#f9c80e] text-white"> 
      <Multiply /> 
    </button>
    <button on:click={() => addToEquation(".")}> . </button>
    <button on:click={() => addToEquation("0")}> 0 </button>
    <button on:click={solve} class="col-span-2 bg-[#f3f6fc]"> = </button>
</div>
