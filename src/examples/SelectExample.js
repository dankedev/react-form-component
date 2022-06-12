// import {Select,Option,OptionGroup} from "../components/Select"
import {Select, Option} from "../components/Select/Select"
import {createRef} from "react";
import SelectField from "../components/SelectField/SelectField";
import {TextField} from "../components";

const films = [
    {
        label: "Toy Story",
        icon: "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
        value: "1990s45"
    },
    {
        label: "A Bugs Life",
        icon: "https://upload.wikimedia.org/wikipedia/en/c/cc/A_Bug%27s_Life.jpg",
        value: "1990s78"
    },
    {
        label: "Toy Story 2",
        icon: "https://upload.wikimedia.org/wikipedia/en/c/c0/Toy_Story_2.jpg",
        value: "1990s7"
    },
    {
        label: "Monsters, Inc.",
        icon: "https://upload.wikimedia.org/wikipedia/en/6/63/Monsters_Inc.JPG",
        value: "200970s"
    },
    {
        label: "Finding Nemo",
        icon: "https://upload.wikimedia.org/wikipedia/en/2/29/Finding_Nemo.jpg",
        value: "200780s"
    },
    {
        label: "The Incredibles",
        icon:
            "https://upload.wikimedia.org/wikipedia/en/2/27/The_Incredibles_%282004_animated_feature_film%29.jpg",
        value: "200770s"
    },
    {
        label: "Cars",
        icon: "https://upload.wikimedia.org/wikipedia/en/3/34/Cars_2006.jpg",
        value: "200770s"
    },
    {
        label: "Ratatouille",
        icon:
            "https://upload.wikimedia.org/wikipedia/en/5/50/RatatouillePoster.jpg",
        value: "204500s"
    },
    {
        label: "WALL-E",
        icon: "https://upload.wikimedia.org/wikipedia/en/c/c2/WALL-Eposter.jpg",
        value: "205400s"
    },
    {
        label: "Up",
        icon:
            "https://upload.wikimedia.org/wikipedia/en/0/05/Up_%282009_film%29.jpg",
        value: "200450s"
    },
    {
        label: "Cars 2",
        icon: "https://upload.wikimedia.org/wikipedia/en/7/7f/Cars_2_Poster.jpg",
        value: "200010s"
    },
    {
        label: "Toy Story 3",
        icon:
            "https://upload.wikimedia.org/wikipedia/en/6/69/Toy_Story_3_poster.jpg",
        value: "201880s"
    },
    {
        label: "Brave",
        icon: "https://upload.wikimedia.org/wikipedia/en/9/96/Brave_Poster.jpg",
        value: "201240s"
    },
    {
        label: "Monsters University",
        icon:
            "https://upload.wikimedia.org/wikipedia/en/2/2a/Monsters_University_poster_3.jpg",
        value: "20100s"
    },
    {
        label: "Inside Out",
        icon:
            "https://upload.wikimedia.org/wikipedia/en/0/0a/Inside_Out_%282015_film%29_poster.jpg",
        value: "20109s"
    },
    {
        label: "The Good Dinosaur",
        icon:
            "https://upload.wikimedia.org/wikipedia/en/8/80/The_Good_Dinosaur_poster.jpg",
        value: "20510s"
    },
    {
        label: "Finding Dory",
        icon: "https://upload.wikimedia.org/wikipedia/en/3/3e/Finding_Dory.jpg",
        value: "20130s"
    },
    {
        label: "Cars 3",
        icon:
            "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Cars_3_poster.jpg/220px-Cars_3_poster.jpg",
        value: "201120s"
    },
    {
        label: "Coco",
        icon:
            "https://upload.wikimedia.org/wikipedia/en/9/98/Coco_%282017_film%29_poster.jpg",
        value: "20110s"
    },
    {
        label: "Incredibles 2",
        icon:
            "https://upload.wikimedia.org/wikipedia/en/1/1f/Incredibles_2_%282018_animated_film%29.jpg",
        value: "201210s"
    },
    {
        label: "Toy Story 4",
        icon:
            "https://upload.wikimedia.org/wikipedia/en/4/4c/Toy_Story_4_poster.jpg",
        value: "20130s"
    },
    {
        label: "Onward",
        icon: "https://upload.wikimedia.org/wikipedia/en/0/03/Onward_poster.jpg",
        value: "20120s"
    },
    {
        label: "Soul",
        icon:
            "https://upload.wikimedia.org/wikipedia/en/3/39/Soul_%282020_film%29_poster.jpg",
        value: "20320s"
    },
    {
        label: "Luca",
        icon:
            "https://upload.wikimedia.org/wikipedia/en/3/33/Luca_%282021_film%29.png",
        value: "23020s"
    }
];

const SelectExample = () => {
    let inputRef = createRef();
    return (<div className={'space-y-8 mb-20 min-h-screen w-full '}>
        <h1>Floating UI Select</h1>
        {/*<Select ref={inputRef} options={films} label={'Pilihan Anda?'}/>*/}
<div className="grid grid-cols-3 gap-6">
    <div className="col-span-1 space-y-4">
        <Select variant="outlined" size={'large'} ref={inputRef} label="Select Version">
            <Option>Material Tailwind HTML</Option>
            <Option>Material Tailwind React</Option>
            <Option>Material Tailwind Vue</Option>
            <Option>Material Tailwind Angular</Option>
            <Option>Material Tailwind Svelte</Option>
        </Select>

        <TextField variant={'outlined'} size={'small'} fullWidth={true} color={'red'} label={'Select Version'}/>
    </div>

    <div className="col-span-1 space-y-4">
        <Select variant="static" size={'small'} ref={inputRef} label="Select Version">
            <Option>Material Tailwind HTML</Option>
            <Option>Material Tailwind React</Option>
            <Option>Material Tailwind Vue</Option>
            <Option>Material Tailwind Angular</Option>
            <Option>Material Tailwind Svelte</Option>
        </Select>

        <TextField variant={'filled'} size={'small'} fullWidth={true} color={'red'} label={'Select Version'}/>
    </div>

   <div className="col-span-1 space-y-4">
        <Select variant="standard" size={'small'} ref={inputRef} label="Select Version">
            <Option>Material Tailwind HTML</Option>
            <Option>Material Tailwind React</Option>
            <Option>Material Tailwind Vue</Option>
            <Option>Material Tailwind Angular</Option>
            <Option>Material Tailwind Svelte</Option>
        </Select>

        <TextField variant={'standard'} size={'small'} fullWidth={true} color={'red'} label={'Select Version'}/>
    </div>

</div>
      <div className="flex space-x-6">
          <div className="w-72 ">

          </div>
          <div className="w-72 ">
              <Select variant="static" ref={inputRef} label="Select Version">
                  <Option>Material Tailwind HTML</Option>
                  <Option>Material Tailwind React</Option>
                  <Option>Material Tailwind Vue</Option>
                  <Option>Material Tailwind Angular</Option>
                  <Option>Material Tailwind Svelte</Option>
              </Select>
          </div>
      </div>


    </div>)
}

// SelectExample.displaylabel = 'SelectExampleComponent'

export default SelectExample;