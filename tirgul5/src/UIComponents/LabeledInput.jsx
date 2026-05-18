

export default function LabeledInput(props) {
    return (
      <div>
        <label class="block text-sm font-medium">{props.label}</label>
        <input class="w-full p-3 mb-4 border rounded" type={props.type}/>
      </div>
    );
}
