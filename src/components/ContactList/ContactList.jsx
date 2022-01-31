import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem/ContactListItem';
import { ListStyle } from './ContactList.styled';

const ContactList = ({visibleContact,onDeleteContact}) => {
  return (
    <ListStyle>
      {visibleContact.map((data,id) => {
        return (
          <ContactListItem key={id} data={data} onDeleteContact={onDeleteContact} />
        );
      })}
    </ListStyle>
  );
};
export default ContactList;
ContactList.propTypes = {
  visibleContact: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
