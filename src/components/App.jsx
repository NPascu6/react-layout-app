import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './ui/Header';
import theme from './ui/Theme';
import Footer from './ui/Footer';
import LandingPage from './LandingPage';
import Services from './Services';
import CustomSoftware from './CustomSoftware';

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <LandingPage
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            path="/customsoftware"
            render={(props) => (
              <CustomSoftware
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            path="/services"
            render={(props) => (
              <Services
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route path="/mobiledevelopment" component={() => <div>Mobile apps</div>} />
          <Route path="/customwebapplications" component={() => <div>Web apps</div>} />
          <Route path="/about" component={() => <div>About</div>} />
          <Route path="/contact" component={() => <div>Contact</div>} />
          <Route path="/estimate" component={() => <div>Estimate</div>} />
        </Switch>
        <Footer
          setValue={setValue}
          setSelectedIndex={setSelectedIndex}
          selectedIndex={selectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
