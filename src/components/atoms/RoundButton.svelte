<script>
  import { createEventDispatcher } from "svelte";
  /**
   * Is this the principal call to action on the page?
   */
  export let primary = false;

  /**
   * What background color to use
   */
  export let backgroundColor;
  /**
   * How large should the button be?
   */
  export let size = "large";
  /**
   * Button contents
   */
  export let label = "";

  let mode = primary ? "round-button--primary" : "round-button--secondary";

  let style = backgroundColor ? `background-color: ${backgroundColor}` : "";

  const dispatch = createEventDispatcher();

  /**
   * Optional click handler
   */
  function onClick(event) {
    dispatch("click", event);
  }
</script>

<button
  type="button"
  class={[
    primary ? "bg-red-500 text-white active:bg-red-600" : "",
    primary ? "" : "text-black",
    "text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3",
    "hover:shadow-lg",
    "ease-linear transition-all duration-250",
    "focus:outline-none",
    "round-button",
    `round-button--${size}`,
    mode,
  ].join(" ")}
  {style}
  on:click={onClick}
>
  {label}
</button>

<style>
  .round-button {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: 4em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
  }
  .round-button--small {
    font-size: 12px;
    padding: 10px 16px;
  }
  .round-button--medium {
    font-size: 14px;
    padding: 11px 20px;
  }
  .round-button--large {
    font-size: 16px;
    padding: 12px 24px;
  }
</style>
