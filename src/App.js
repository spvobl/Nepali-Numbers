import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Collapse from '@material-ui/core/Collapse';
import { Typography } from '@material-ui/core';
import n0 from '/Users/me/Documents/React/nepali/src/numbers/0.mp3';
import n1 from '/Users/me/Documents/React/nepali/src/numbers/1.mp3';
import n2 from '/Users/me/Documents/React/nepali/src/numbers/2.mp3';
import n3 from '/Users/me/Documents/React/nepali/src/numbers/3.mp3';
import n4 from '/Users/me/Documents/React/nepali/src/numbers/4.mp3';
import n5 from '/Users/me/Documents/React/nepali/src/numbers/5.mp3';
import n6 from '/Users/me/Documents/React/nepali/src/numbers/6.mp3';
import n7 from '/Users/me/Documents/React/nepali/src/numbers/7.mp3';
import n8 from '/Users/me/Documents/React/nepali/src/numbers/8.mp3';
import n9 from '/Users/me/Documents/React/nepali/src/numbers/9.mp3';
import n10 from '/Users/me/Documents/React/nepali/src/numbers/10.mp3';
import n11 from '/Users/me/Documents/React/nepali/src/numbers/11.mp3';
import n12 from '/Users/me/Documents/React/nepali/src/numbers/12.mp3';
import n13 from '/Users/me/Documents/React/nepali/src/numbers/13.mp3';
import n14 from '/Users/me/Documents/React/nepali/src/numbers/14.mp3';
import n15 from '/Users/me/Documents/React/nepali/src/numbers/15.mp3';
import n16 from '/Users/me/Documents/React/nepali/src/numbers/16.mp3';
import n17 from '/Users/me/Documents/React/nepali/src/numbers/17.mp3';
import n18 from '/Users/me/Documents/React/nepali/src/numbers/18.mp3';
import n19 from '/Users/me/Documents/React/nepali/src/numbers/19.mp3';
import n20 from '/Users/me/Documents/React/nepali/src/numbers/20.mp3';
import n21 from '/Users/me/Documents/React/nepali/src/numbers/21.mp3';
import n22 from '/Users/me/Documents/React/nepali/src/numbers/22.mp3';
import n23 from '/Users/me/Documents/React/nepali/src/numbers/23.mp3';
import n24 from '/Users/me/Documents/React/nepali/src/numbers/24.mp3';
import n25 from '/Users/me/Documents/React/nepali/src/numbers/25.mp3';
import n26 from '/Users/me/Documents/React/nepali/src/numbers/26.mp3';
import n27 from '/Users/me/Documents/React/nepali/src/numbers/27.mp3';
import n28 from '/Users/me/Documents/React/nepali/src/numbers/28.mp3';
import n29 from '/Users/me/Documents/React/nepali/src/numbers/29.mp3';
import n30 from '/Users/me/Documents/React/nepali/src/numbers/30.mp3';
import n31 from '/Users/me/Documents/React/nepali/src/numbers/31.mp3';
import n32 from '/Users/me/Documents/React/nepali/src/numbers/32.mp3';
import n33 from '/Users/me/Documents/React/nepali/src/numbers/33.mp3';
import n34 from '/Users/me/Documents/React/nepali/src/numbers/34.mp3';
import n35 from '/Users/me/Documents/React/nepali/src/numbers/35.mp3';
import n36 from '/Users/me/Documents/React/nepali/src/numbers/36.mp3';
import n37 from '/Users/me/Documents/React/nepali/src/numbers/37.mp3';
import n38 from '/Users/me/Documents/React/nepali/src/numbers/38.mp3';
import n39 from '/Users/me/Documents/React/nepali/src/numbers/39.mp3';
import n40 from '/Users/me/Documents/React/nepali/src/numbers/40.mp3';
import n41 from '/Users/me/Documents/React/nepali/src/numbers/41.mp3';
import n42 from '/Users/me/Documents/React/nepali/src/numbers/42.mp3';
import n43 from '/Users/me/Documents/React/nepali/src/numbers/43.mp3';
import n44 from '/Users/me/Documents/React/nepali/src/numbers/44.mp3';
import n45 from '/Users/me/Documents/React/nepali/src/numbers/45.mp3';
import n46 from '/Users/me/Documents/React/nepali/src/numbers/46.mp3';
import n47 from '/Users/me/Documents/React/nepali/src/numbers/47.mp3';
import n48 from '/Users/me/Documents/React/nepali/src/numbers/48.mp3';
import n49 from '/Users/me/Documents/React/nepali/src/numbers/49.mp3';
import n50 from '/Users/me/Documents/React/nepali/src/numbers/50.mp3';
import n51 from '/Users/me/Documents/React/nepali/src/numbers/51.mp3';
import n52 from '/Users/me/Documents/React/nepali/src/numbers/52.mp3';
import n53 from '/Users/me/Documents/React/nepali/src/numbers/53.mp3';
import n54 from '/Users/me/Documents/React/nepali/src/numbers/54.mp3';
import n55 from '/Users/me/Documents/React/nepali/src/numbers/55.mp3';
import n56 from '/Users/me/Documents/React/nepali/src/numbers/56.mp3';
import n57 from '/Users/me/Documents/React/nepali/src/numbers/57.mp3';
import n58 from '/Users/me/Documents/React/nepali/src/numbers/58.mp3';
import n59 from '/Users/me/Documents/React/nepali/src/numbers/59.mp3';
import n60 from '/Users/me/Documents/React/nepali/src/numbers/60.mp3';
import n61 from '/Users/me/Documents/React/nepali/src/numbers/61.mp3';
import n62 from '/Users/me/Documents/React/nepali/src/numbers/62.mp3';
import n63 from '/Users/me/Documents/React/nepali/src/numbers/63.mp3';
import n64 from '/Users/me/Documents/React/nepali/src/numbers/64.mp3';
import n65 from '/Users/me/Documents/React/nepali/src/numbers/65.mp3';
import n66 from '/Users/me/Documents/React/nepali/src/numbers/66.mp3';
import n67 from '/Users/me/Documents/React/nepali/src/numbers/67.mp3';
import n68 from '/Users/me/Documents/React/nepali/src/numbers/68.mp3';
import n69 from '/Users/me/Documents/React/nepali/src/numbers/69.mp3';
import n70 from '/Users/me/Documents/React/nepali/src/numbers/70.mp3';
import n71 from '/Users/me/Documents/React/nepali/src/numbers/71.mp3';
import n72 from '/Users/me/Documents/React/nepali/src/numbers/72.mp3';
import n73 from '/Users/me/Documents/React/nepali/src/numbers/73.mp3';
import n74 from '/Users/me/Documents/React/nepali/src/numbers/74.mp3';
import n75 from '/Users/me/Documents/React/nepali/src/numbers/75.mp3';
import n76 from '/Users/me/Documents/React/nepali/src/numbers/76.mp3';
import n77 from '/Users/me/Documents/React/nepali/src/numbers/77.mp3';
import n78 from '/Users/me/Documents/React/nepali/src/numbers/78.mp3';
import n79 from '/Users/me/Documents/React/nepali/src/numbers/79.mp3';
import n80 from '/Users/me/Documents/React/nepali/src/numbers/80.mp3';
import n81 from '/Users/me/Documents/React/nepali/src/numbers/81.mp3';
import n82 from '/Users/me/Documents/React/nepali/src/numbers/82.mp3';
import n83 from '/Users/me/Documents/React/nepali/src/numbers/83.mp3';
import n84 from '/Users/me/Documents/React/nepali/src/numbers/84.mp3';
import n85 from '/Users/me/Documents/React/nepali/src/numbers/85.mp3';
import n86 from '/Users/me/Documents/React/nepali/src/numbers/86.mp3';
import n87 from '/Users/me/Documents/React/nepali/src/numbers/87.mp3';
import n88 from '/Users/me/Documents/React/nepali/src/numbers/88.mp3';
import n89 from '/Users/me/Documents/React/nepali/src/numbers/89.mp3';
import n90 from '/Users/me/Documents/React/nepali/src/numbers/90.mp3';
import n91 from '/Users/me/Documents/React/nepali/src/numbers/91.mp3';
import n92 from '/Users/me/Documents/React/nepali/src/numbers/92.mp3';
import n93 from '/Users/me/Documents/React/nepali/src/numbers/93.mp3';
import n94 from '/Users/me/Documents/React/nepali/src/numbers/94.mp3';
import n95 from '/Users/me/Documents/React/nepali/src/numbers/95.mp3';
import n96 from '/Users/me/Documents/React/nepali/src/numbers/96.mp3';
import n97 from '/Users/me/Documents/React/nepali/src/numbers/97.mp3';
import n98 from '/Users/me/Documents/React/nepali/src/numbers/98.mp3';
import n99 from '/Users/me/Documents/React/nepali/src/numbers/99.mp3';
import n100 from '/Users/me/Documents/React/nepali/src/numbers/100.mp3';

const useStyles = makeStyles({
  table: {
    align: "center",
  },

});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 22,
    fontWeight: 'normal',
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const numbers = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९', '१०', '११', '१२', '१३', '१४', '१५', '१६', '१७', '१८', '१९', '२०', '२१', '२२', '२३', '२४', '२५', '२६', '२७', '२८', '२९', '३०', '३१', '३२', '३३', '३४', '३५', '३६', '३७', '३८', '३९', '४०', '४१', '४२', '४३', '४४', '४५', '४६', '४७', '४८', '४९', '५०', '५१', '५२', '५३', '५४', '५५', '५६', '५७', '५८', '५९', '६०', '६१', '६२', '६३', '६४', '६५', '६६', '६७', '६८', '६९', '७०', '७१', '७२', '७३', '७४', '७५', '७६', '७७', '७८', '७९', '८०', '८१', '८२', '८३', '८४', '८५', '८६', '८७', '८८', '८९', '९०', '९१', '९२', '९३', '९४', '९५', '९६', '९७', '९८', '९९', '१००'];
const names = ['शून्य','एक','दुई','तीन','चार','पाँच','छ','सात','आठ','नौ','दश','एघार','बाह्र','तेह्र','चौघ','पन्घ्र','सोह्र','सत्र','अठार','उन्नाइस','बीस','एक्काईस','बाइस','तेईस','चौबीस','पच्चीस','छब्बीस','सत्ताईस','अठ्ठाईस','उनान्तीस','तीस','एकतीस','बत्तीस','तेत्तीस','चौतीस','पैंतीस','छत्तीस','सड्तीस','अड्तीस','उनान्चालीस','चालीस','एकचालीस','बयालीस','त्रिचालीस','चौवालीस','पैंतालीस','छयालीस','सठ्चालीस','अठ्चालीस','उनन्पचास','पचास','एकाउन्न','बाउन्न','त्रिपन्न','चउन्न','पचपन्न','छपन्न','सन्ताउन्न','अन्ठाउन्न','उनान्साठी', 'साठी', 'एकसट्ठी', 'बयसट्ठी','त्रिसट्ठी', 'चौसट्ठी', 'पैंसट्ठी', 'छयसट्ठी', 'सतसट्ठी', 'अठ्सट्ठी', 'उनन्सत्तरी', 'सत्तरी','एकहत्तर', 'बहत्तर', 'त्रिहत्तर', 'चौहत्तर', 'पचहत्तर', 'छयहत्तर', 'सतहत्तर', 'अठहत्तर', 'उनासी', 'असी', 'एकासी', 'बयासी', 'त्रियासी', 'चौरासी', 'पचासी',  'छयासी', 'सतासी', 'अठासी', 'उनानब्बे', 'नब्बे','एकानब्बे', 'बयानब्बे', 'त्रियानब्बे', 'चौरानब्बे', 'पन्चानब्बे', 'छयानब्बे', 'सन्तानब्बे', 'अन्ठानब्बे', 'उनान्सय', 'सय'];
const sounds = [n0,n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,n14,n15,n16,n17,n18,n19,n20,n21,n22,n23,n24,n25,n26,n27,n28,n29,n30,n31,n32,n33,n34,n35,n36,n37,n38,n39,n40,n41,n42,n43,n44,n45,n46,n47,n48,n49,n50,n51,n52,n53,n54,n55,n56,n57,n58,n59,n60,n61,n62,n63,n64,n65,n66,n67,n68,n69,n70,n71,n72,n73,n74,n75,n76,n77,n78,n79,n80,n81,n82,n83,n84,n85,n86,n87,n88,n89,n90,n91,n92,n93,n94,n95,n96,n97,n98,n99,n100];
const rows = Array(101);

for (let x=0; x<numbers.length;x++){
  rows[x] = {number:numbers[x],name:names[x],sound:sounds[x]};
}
function Row(props){
  const {row} = props;
  const likeAudio = new Audio(row.sound);
  const [open, setOpen] = React.useState(false);
  const playSound = (audioFile) => {
    audioFile.play();
  };
  const clickButton = () => {
    setOpen(!open);
    if (!open){
      playSound(likeAudio);
    }
  }
  return(
    <React.Fragment>
        <TableBody>
            <StyledTableRow key={row.name} row={row}>
            <StyledTableCell align="center" style={{ paddingBottom: 20, paddingTop: 20}} onClick={clickButton}>{row.number}
            <Collapse in={open} unmountOnExit>
              <Typography style={{paddingTop:5, paddingBottom:0}}>{row.name}</Typography>
            </Collapse>
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
  </React.Fragment>
  )
  
}

function App() {
  const classes = useStyles();
  return (
    <TableContainer>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
        <TableRow>
          <StyledTableCell align="center" style={{paddingBottom:5}} onClick={() => window.location.reload()}><h2>अङ्क</h2></StyledTableCell>
        </TableRow>
        </TableHead>
        {rows.map(row => (
            <Row key={row.name} row={row} />
          ))}
      </Table>
    </TableContainer>
  );
}

export default App;
